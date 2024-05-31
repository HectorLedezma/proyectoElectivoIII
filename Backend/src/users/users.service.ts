import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }

  async create(user: any): Promise<any> {
    this.users.push(user);
    return user;
  }
}