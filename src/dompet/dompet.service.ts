import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DompetDto } from './dto';

@Injectable()
export class DompetService {
  constructor(private prismaService: PrismaService) {}

  async createDompet(dto: DompetDto) {
    try {
      const dompet = this.prismaService.dompet.create({ data: dto });
      return dompet;
    } catch (error) {
      console.log(error);
    }
  }
}
