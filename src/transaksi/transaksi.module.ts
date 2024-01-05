import { Module } from '@nestjs/common';
import { TransaksiController } from './transaksi.controller';
import { TransaksiService } from './transaksi.service';

@Module({
  controllers: [TransaksiController],
  providers: [TransaksiService]
})
export class TransaksiModule {}
