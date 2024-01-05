import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetTransaksiDTO, transaksiDTO } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransaksiService {
  constructor(private prismaService: PrismaService) {}

  async postTransaksi(dto: transaksiDTO & { userId: number }) {
    let updateWalletAmount: { increment: number } | { decrement: number };

    if (dto.transaksiTipeId === 1) {
      updateWalletAmount = { increment: dto.amount };
    } else {
      updateWalletAmount = { decrement: dto.amount };
    }

    try {
      const [transaksi, dompet] = await this.prismaService.$transaction([
        this.prismaService.transaksi.create({ data: dto }),
        this.prismaService.dompet.update({
          where: { id: dto.dompetId },
          data: { amount: updateWalletAmount },
        }),
      ]);

      return {
        transaksi,
        dompet,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getTransaksiByUserId(options: GetTransaksiDTO & { userId: number }) {
    const queryOptions: Prisma.TransaksiFindManyArgs = {
      where: {
        userId: options.userId,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
        },
      },
      include: {
        transaksiKategori: true,
      },
      orderBy: { createdAt: 'desc' },
    };

    if (options.limit) {
      queryOptions.take = options.limit;
    }

    if (options.transaksiTipeId) {
      queryOptions.where = {
        ...queryOptions.where,
        transaksiTipeId: options.transaksiTipeId,
      };
    }

    try {
      return await this.prismaService.transaksi.findMany(queryOptions);
    } catch (error) {
      console.log(error);
    }
  }
}
