import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DompetModule } from './dompet/dompet.module';
import { TransaksiKategoriModule } from './transaksi-kategori/transaksi-kategori.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, DompetModule, TransaksiKategoriModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
