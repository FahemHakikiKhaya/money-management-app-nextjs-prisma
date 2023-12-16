import { Module } from '@nestjs/common';
import { DompetService } from './dompet.service';
import { DompetController } from './dompet.controller';

@Module({
  providers: [DompetService],
  controllers: [DompetController]
})
export class DompetModule {}
