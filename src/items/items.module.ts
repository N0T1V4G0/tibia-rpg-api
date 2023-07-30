import { Module } from '@nestjs/common';
import { AttackModule } from './attack/attack.module';
import { DefenseModule } from './defense/defense.module';

@Module({
  imports: [AttackModule, DefenseModule]
})
export class ItemsModule {}
