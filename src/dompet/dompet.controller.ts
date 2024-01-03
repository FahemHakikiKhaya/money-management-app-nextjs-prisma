import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { DompetDto } from './dto';
import { DompetService } from './dompet.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';
import { Dompet, User } from '@prisma/client';

@Controller('dompet')
export class DompetController {
  constructor(private dompetService: DompetService) {}

  @UseGuards(AuthGuard('user'))
  @Post('/')
  async createDompet(@Body() dto: DompetDto, @GetUser() user: User) {
    return this.dompetService.createDompet({ ...dto, userId: user.id });
  }

  @UseGuards(AuthGuard('user'))
  @Get('/user')
  async getDompetByUser(@GetUser() user: User): Promise<Dompet[] | undefined> {
    return this.dompetService.getDompetByUser(user);
  }
}
