import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttackService } from './attack.service';
import { CreateAttackDto } from './dto/create-attack.dto';
import { UpdateAttackDto } from './dto/update-attack.dto';

@Controller('attack')
export class AttackController {
  constructor(private readonly attackService: AttackService) {}

  @Post()
  create(@Body() createAttackDto: CreateAttackDto) {
    return this.attackService.create(createAttackDto);
  }

  @Get()
  findAll() {
    return this.attackService.findAll();
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
