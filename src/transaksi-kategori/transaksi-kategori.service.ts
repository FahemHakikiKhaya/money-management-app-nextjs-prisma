import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransaksiKategoriService {
  constructor(private prismaService: PrismaService) {}

  async getAllTransaksiKategori() {
    try {
      const TransaksiKategori =
        await this.prismaService.transaksiKategori.findMany();

      return TransaksiKategori;
    } catch (error) {
      console.log(error);
    }
  }
}
