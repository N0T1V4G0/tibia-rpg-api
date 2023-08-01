import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateDefenseDto {
  @IsString()
  name: string;

  @IsUrl()
  @IsOptional()
  img?: string;

  @IsPositive()
  @IsInt()
  def: number;

  @IsString()
  @IsOptional()
  effect?: string;
}
