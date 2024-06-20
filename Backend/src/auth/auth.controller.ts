import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: any) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: any, @Res() response: Response) {
    const result = await this.authService.login(loginUserDto.correo, loginUserDto.pass);
    if (result.access_token) {
      response.status(200).json(result);
    } else {
      response.status(401).json(result);
    }
  }
}