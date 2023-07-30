import { PartialType } from '@nestjs/mapped-types';
import { CreateAttackDto } from './create-attack.dto';
import { IsEnum, IsOptional, IsPositive, IsString, IsUrl } from 'class-validator';
import { AttackType } from './AttackType.';

export class UpdateAttackDto extends PartialType(CreateAttackDto) {
  @IsString()
  @IsOptional()
  name?: string

  @IsUrl()
  @IsOptional()
  img?: string

  @IsPositive()
  @IsOptional()
  atk?: number

  @IsString()
  @IsOptional()
  effect?: string

  @IsEnum(AttackType)
  @IsOptional()
  type?: AttackType
}
