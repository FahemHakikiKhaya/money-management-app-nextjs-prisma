import { Module } from '@nestjs/common';
import { TransaksiKategoriController } from './transaksi-kategori.controller';
import { TransaksiKategoriService } from './transaksi-kategori.service';

@Module({
  controllers: [TransaksiKategoriController],
  providers: [TransaksiKategoriService]
})
export class TransaksiKategoriModule {}
