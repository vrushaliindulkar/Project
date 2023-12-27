import { Injectable } from '@nestjs/common';
import { User } from 'libs/entities';

@Injectable()
export class UserService {
  private users: User[] = [];

  getAllUsers(): { message: string; data: User[] } {
    let data = this.users;

    return {
      message: 'Task list.',
      data: data,
    };
  }

  createUser(user: User): { message: string; data: User } {
    this.users.push(user);

    return {
      message: 'User Added Successfully!',
      data: user,
    };
  }


}
