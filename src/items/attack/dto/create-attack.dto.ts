import { IsEnum, IsInt, IsOptional, IsPositive, IsString, IsUrl, Max, Min } from "class-validator"
import { PropertyType } from "./AttackType."

export class CreateAttackDto {
  @IsString()
  name: string

  @IsUrl()
  @IsOptional()
  img?: string

  @IsPositive()
  @IsInt()
  atk: number

  @IsString()
  @IsOptional()
  effect?: string

  @IsEnum(PropertyType)
  property: PropertyType;

  @IsInt({message: 'wield must be 1 or 2'})
  @Min(1)
  @Max(2)
  wield: number;
}
