import { Controller, Get, Post, Body, Patch, Param, Delete, ParseEnumPipe } from '@nestjs/common';
import { AttackService } from './attack.service';
import { CreateAttackDto } from './dto/create-attack.dto';
import { UpdateAttackDto } from './dto/update-attack.dto';
import { AttackType } from './dto/AttackType.';

@Controller('items/:attackItemType')
export class AttackController {
  constructor(private readonly attackService: AttackService) {}

  @Post()
  create(
    @Body() createAttackDto: CreateAttackDto,
    @Param('attackItemType', new ParseEnumPipe(AttackType)) attackItemType: AttackType,
  ) {
    return this.attackService.create(createAttackDto, attackItemType);
  }

  @Get()
  findAll(@Param('attackItemType', new ParseEnumPipe(AttackType)) attackItemType: AttackType) {
    return this.attackService.findAll(attackItemType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttackDto: UpdateAttackDto) {
    return this.attackService.update(+id, updateAttackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attackService.remove(+id);
  }
}
