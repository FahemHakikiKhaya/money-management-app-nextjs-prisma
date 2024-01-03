import { Controller, Get } from '@nestjs/common';
import { TransaksiKategoriService } from './transaksi-kategori.service';

@Controller('transaksi-kategori')
export class TransaksiKategoriController {
  constructor(private transaksiKategoriService: TransaksiKategoriService) {}

  @Get('/')
  async getAllTransaksiKategori() {
    return this.transaksiKategoriService.getAllTransaksiKategori();
  }
}
