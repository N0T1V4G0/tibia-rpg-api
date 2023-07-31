import { PartialType } from '@nestjs/mapped-types';
import { CreateAttackDto } from './create-attack.dto';
import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive, IsString, IsUrl, Max, Min } from 'class-validator';
import { PropertyType } from './AttackType.';

export class UpdateAttackDto extends PartialType(CreateAttackDto) {
  @IsString()
  @IsOptional()
  name?: string

  @IsUrl()
  @IsOptional()
  img?: string

  @IsPositive()
  @IsInt()
  @IsOptional()
  atk?: number

  @IsString()
  @IsOptional()
  effect?: string

  @IsEnum(PropertyType)
  @IsOptional()
  property?: PropertyType;

  @IsInt({message: 'wield must be 1 or 2'})
  @Min(1)
  @Max(2)
  @IsOptional()
  wield?: number;
}
