import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DompetDto } from './dto';
import { User } from '@prisma/client';

@Injectable()
export class DompetService {
  constructor(private prismaService: PrismaService) {}

  async createDompet(dto: DompetDto & { userId: number }) {
    try {
      const dompet = this.prismaService.dompet.create({ data: dto });
      return dompet;
    } catch (error) {
      console.log(error);
    }
  }

  async getDompetByUser(user: User) {
    try {
      const dompets = this.prismaService.dompet.findMany({
        where: { userId: user.id },
      });
      return dompets;
    } catch (error) {
      console.log(error);
    }
  }
}
