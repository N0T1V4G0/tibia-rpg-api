import { IsEnum, IsOptional, IsPositive, IsString, IsUrl } from "class-validator"
import { DefenseType } from "./DefenseType"

export class CreateDefenseDto {
  @IsString()
  name: string

  @IsUrl()
  @IsOptional()
  img: string

  @IsPositive()
  def: number

  @IsString()
  @IsOptional()
  effect: string

  @IsEnum(DefenseType)
  type: DefenseType
}
