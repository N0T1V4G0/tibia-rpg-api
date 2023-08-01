import { Injectable } from '@nestjs/common';
import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';
import { DefenseType } from './dto/DefenseType';

@Injectable()
export class DefenseService {
  create(createDefenseDto: CreateDefenseDto, defenseItemType: DefenseType) {
    return `This action adds a new ${defenseItemType}`;
  }

  findAll() {
    return `This action returns all defense items`;
  }

  findAllByType(defenseItemType: DefenseType) {
    return `This action returns all ${defenseItemType}s`;
  }

  findOne(id: number) {
    return `This action returns a #${id} defense`;
  }

  update(id: number, updateDefenseDto: UpdateDefenseDto) {
    return `This action updates a #${id} defense`;
  }

  remove(id: number) {
    return `This action removes a #${id} defense`;
  }
}
