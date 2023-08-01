import { Injectable } from '@nestjs/common';
import { CreateAttackDto } from './dto/create-attack.dto';
import { UpdateAttackDto } from './dto/update-attack.dto';
import { AttackType } from './dto/AttackType.';

@Injectable()
export class AttackService {
  create(createAttackDto: CreateAttackDto, attackItemType: AttackType) {
    return `This action adds a new ${attackItemType}`;
  }

  findAll() {
    return `This action returns all attack items`;
  }

  findAllByType(attackItemType: AttackType) {
    return `This action returns all ${attackItemType}s`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attack item`;
  }

  update(id: number, updateAttackDto: UpdateAttackDto) {
    return `This action updates a #${id} attack item`;
  }

  remove(id: number) {
    return `This action removes a #${id} attack item`;
  }
}
