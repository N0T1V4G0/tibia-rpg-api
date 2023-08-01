import { PartialType } from '@nestjs/mapped-types';
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
import { CreateDefenseDto } from './create-defense.dto';

export class UpdateDefenseDto extends PartialType(CreateDefenseDto) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsUrl()
  @IsOptional()
  img?: string;

  @IsPositive()
  @IsInt()
  @IsOptional()
  def?: number;

  @IsString()
  @IsOptional()
  effect?: string;
}
