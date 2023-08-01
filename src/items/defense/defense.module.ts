import { Module } from '@nestjs/common';
import { DefenseService } from './defense.service';
import { DefenseController } from './defense.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DefenseRepository } from './defense.repository';

@Module({
  controllers: [DefenseController],
  providers: [DefenseService, PrismaService, DefenseRepository],
})
export class DefenseModule {}
