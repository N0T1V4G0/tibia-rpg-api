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
import { DefenseService } from './defense.service';
import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';
import { DefenseType } from './dto/DefenseType';

@Controller('item/defense')
export class DefenseController {
  constructor(private readonly defenseService: DefenseService) {}

  @Post(':defenseItemType')
  create(
    @Body() createDefenseDto: CreateDefenseDto,
    @Param('defenseItemType', new ParseEnumPipe(DefenseType))
    defenseItemType: DefenseType,
  ) {
    return this.defenseService.create(createDefenseDto, defenseItemType);
  }

  @Get()
  findAll() {
    return this.defenseService.findAll();
  }

  @Get(':defenseItemType')
  findAllByType(
    @Param('defenseItemType', new ParseEnumPipe(DefenseType))
    defenseItemType: DefenseType,
  ) {
    return this.defenseService.findAllByType(defenseItemType);
  }

  @Get(':defenseItemType/:id')
  findOne(
    @Param('id') id: string,
    @Param('defenseItemType', new ParseEnumPipe(DefenseType))
    defenseItemType: DefenseType,
  ) {
    return this.defenseService.findOne(+id);
  }

  @Patch(':defenseItemType/:id')
  update(
    @Param('id') id: string,
    @Body() updateDefenseDto: UpdateDefenseDto,
    @Param('defenseItemType', new ParseEnumPipe(DefenseType))
    defenseItemType: DefenseType,
  ) {
    return this.defenseService.update(+id, updateDefenseDto);
  }

  @Delete(':defenseItemType/:id')
  remove(
    @Param('id') id: string,
    @Param('defenseItemType', new ParseEnumPipe(DefenseType))
    defenseItemType: DefenseType,
  ) {
    return this.defenseService.remove(+id);
  }
}
