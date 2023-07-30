import { Injectable } from '@nestjs/common';
import { CreateAttackDto } from './dto/create-attack.dto';
import { UpdateAttackDto } from './dto/update-attack.dto';

@Injectable()
export class AttackService {
  create(createAttackDto: CreateAttackDto) {
    return 'This action adds a new attack';
  }

  findAll() {
    return `This action returns all attack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attack`;
  }

  update(id: number, updateAttackDto: UpdateAttackDto) {
    return `This action updates a #${id} attack`;
  }

  remove(id: number) {
    return `This action removes a #${id} attack`;
  }
}
