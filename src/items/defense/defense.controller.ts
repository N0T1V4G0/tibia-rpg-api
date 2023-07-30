import { Controller, Get, Post, Body, Patch, Param, Delete, ParseEnumPipe } from '@nestjs/common';
import { DefenseService } from './defense.service';
import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';
import { DefenseType } from './dto/DefenseType';

@Controller('item/defense/:defenseItemType')
export class DefenseController {
  constructor(private readonly defenseService: DefenseService) {}

  @Post()
  create(
    @Body() createDefenseDto: CreateDefenseDto,
    @Param('defenseItemType', new ParseEnumPipe(DefenseType)) defenseItemType: DefenseType,
  ) {
    return this.defenseService.create(createDefenseDto, defenseItemType);
  }

  @Get()
  findAll(@Param('defenseItemType', new ParseEnumPipe(DefenseType)) defenseItemType: DefenseType) {
    return this.defenseService.findAll(defenseItemType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defenseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefenseDto: UpdateDefenseDto) {
    return this.defenseService.update(+id, updateDefenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defenseService.remove(+id);
  }
}
