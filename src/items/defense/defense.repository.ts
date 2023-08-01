import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DefenseRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
