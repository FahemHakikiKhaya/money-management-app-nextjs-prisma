import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('user'))
  @Get('/')
  async test(@GetUser() user: User): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
