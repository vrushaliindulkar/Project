import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './crud.service';
import { User } from 'libs/entities';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get')
  getAllUsers(): { data: User[] } {
    const result = this.userService.getAllUsers();
    return result;
  }

  @Post('create')
  createUser(@Body() user: User): { message: string; data: User } {
    const result = this.userService.createUser(user);
    return result;
  }

}
