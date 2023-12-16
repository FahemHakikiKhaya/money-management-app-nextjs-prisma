import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DompetModule } from './dompet/dompet.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, DompetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
