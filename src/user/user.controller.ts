import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async test(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
