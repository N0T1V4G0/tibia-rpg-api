import { IsEnum, IsOptional, IsPositive, IsString, IsUrl } from "class-validator"
import { AttackType } from "./AttackType."

export class CreateAttackDto {
  @IsString()
  name: string

  @IsUrl()
  @IsOptional()
  img: string

  @IsPositive()
  atk: number

  @IsString()
  @IsOptional()
  effect: string

  @IsEnum(AttackType)
  type: AttackType
}
