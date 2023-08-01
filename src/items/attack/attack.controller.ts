import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseEnumPipe,
} from '@nestjs/common';
import { AttackService } from './attack.service';
import { CreateAttackDto } from './dto/create-attack.dto';
import { UpdateAttackDto } from './dto/update-attack.dto';
import { AttackType } from './dto/AttackType.';

@Controller('item/attack')
export class AttackController {
  constructor(private readonly attackService: AttackService) {}

  @Post(':attackItemType')
  create(
    @Body() createAttackDto: CreateAttackDto,
    @Param('attackItemType', new ParseEnumPipe(AttackType))
    attackItemType: AttackType,
  ) {
    return this.attackService.create(createAttackDto, attackItemType);
  }

  @Get()
  findAll() {
    return this.attackService.findAll();
  }

  @Get(':attackItemType')
  findAllByType(
    @Param('attackItemType', new ParseEnumPipe(AttackType))
    attackItemType: AttackType,
  ) {
    return this.attackService.findAllByType(attackItemType);
  }

  @Get(':attackItemType/:id')
  findOne(
    @Param('id') id: string,
    @Param('attackItemType', new ParseEnumPipe(AttackType))
    attackItemType: AttackType,
  ) {
    return this.attackService.findOne(+id);
  }

  @Patch(':attackItemType/:id')
  update(
    @Param('id') id: string,
    @Body() updateAttackDto: UpdateAttackDto,
    @Param('attackItemType', new ParseEnumPipe(AttackType))
    attackItemType: AttackType,
  ) {
    return this.attackService.update(+id, updateAttackDto);
  }

  @Delete(':attackItemType/:id')
  remove(
    @Param('id') id: string,
    @Param('attackItemType', new ParseEnumPipe(AttackType))
    attackItemType: AttackType,
  ) {
    return this.attackService.remove(+id);
  }
}
