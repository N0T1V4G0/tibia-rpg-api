import { Module } from '@nestjs/common';
import { AttackService } from './attack.service';
import { AttackController } from './attack.controller';
import { AttackRepository } from './attack.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AttackController],
  providers: [AttackService, AttackRepository, PrismaService],
})
export class AttackModule {}
