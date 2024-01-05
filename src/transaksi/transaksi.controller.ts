import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { TransaksiService } from './transaksi.service';
import { GetTransaksiDTO, transaksiDTO } from './dto';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('transaksi')
export class TransaksiController {
  constructor(private transaksiService: TransaksiService) {}

  @UseGuards(AuthGuard('user'))
  @Get('/')
  async getTransaksiByUserId(
    @GetUser() user: User,
    @Query() query: GetTransaksiDTO,
  ) {
    return this.transaksiService.getTransaksiByUserId({
      ...query,
      userId: user.id,
    });
  }

  @UseGuards(AuthGuard('user'))
  @Post('/')
  async postTransaksi(@Body() dto: transaksiDTO, @GetUser() user: User) {
    return this.transaksiService.postTransaksi({ ...dto, userId: user.id });
  }
}
