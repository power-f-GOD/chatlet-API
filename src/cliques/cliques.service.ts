import { Injectable } from '@nestjs/common';
import { CreateCliqueDto } from './dto/create-clique.dto';
import { UpdateCliqueDto } from './dto/update-clique.dto';

@Injectable()
export class CliquesService {
  create(createCliqueDto: CreateCliqueDto) {
    return 'This action adds a new clique';
  }

  findAll() {
    return `This action returns all cliques`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clique`;
  }

  update(id: number, updateCliqueDto: UpdateCliqueDto) {
    return `This action updates a #${id} clique`;
  }

  remove(id: number) {
    return `This action removes a #${id} clique`;
  }
}
