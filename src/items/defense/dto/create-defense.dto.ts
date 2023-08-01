import { IsEnum, IsInt, IsOptional, IsPositive, IsString, IsUrl } from "class-validator"
import { DefenseType } from "./DefenseType"

export class CreateDefenseDto {
  @IsString()
  name: string

  @IsUrl()
  @IsOptional()
  img?: string

  @IsPositive()
  @IsInt()
  def: number

  @IsString()
  @IsOptional()
  effect?: string
}
