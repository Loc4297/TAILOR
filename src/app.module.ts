import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthnModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PrismaModule, AuthnModule, OrderModule],
})
export class AppModule {}
