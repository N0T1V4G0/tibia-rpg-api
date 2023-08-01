import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsModule } from './items/items.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
