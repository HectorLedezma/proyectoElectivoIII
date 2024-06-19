
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import Redis from 'ioredis';

@Injectable()
export class AuthService {
  private redisClient: Redis;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    this.redisClient = new Redis(); 
  }

  async validateUser(correo: string, pass: string): Promise<any> {
    const user = await this.redisClient.hgetall(`user:${correo}`);
    if (!user || Object.keys(user).length === 0 || !user.password) {
      return null; // User not found or password not set
    }
    if (!pass) {
      return null; // User not found
    }
    const passwordIsValid = await bcrypt.compare(pass, user.password);
    if (!passwordIsValid) {
      return null; // Password does not match
    }
    return user;
  }

  async login(correo: string, pass: string) {
    const user = await this.validateUser(correo, pass);
    if (!user) {
      return { status: 'error', message: 'Invalid credentials' };
    }
    const payload = { username: user.correo, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: any) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userData = {
      nombre: user.nombre,
      apellido: user.apellido,
      telefono: user.telefono,
      correo: user.correo,
      password: hashedPassword,
    };

    // Store user data in Redis
    await this.redisClient.hmset(`user:${user.correo}`, userData);

    // Verify if the data was stored correctly
    const storedUser = await this.redisClient.hgetall(`user:${user.correo}`);
    if (storedUser && storedUser.nombre === user.nombre && storedUser.apellido === user.apellido && storedUser.telefono === user.telefono && storedUser.correo === user.correo && storedUser.password === hashedPassword) {
      return { message: 'Usuario registrado exitosamente' };
    } else {
      return { message: 'Error al registrar el usuario' };
    }
  }
}
