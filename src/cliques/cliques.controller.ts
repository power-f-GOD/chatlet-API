import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CliquesService } from './cliques.service';
import { CreateCliqueDto } from './dto/create-clique.dto';
import { UpdateCliqueDto } from './dto/update-clique.dto';

@Controller('cliques')
export class CliquesController {
  constructor(private readonly cliquesService: CliquesService) {}

  @Post()
  create(@Body() createCliqueDto: CreateCliqueDto) {
    return this.cliquesService.create(createCliqueDto);
  }

  @Get()
  findAll() {
    return this.cliquesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cliquesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCliqueDto: UpdateCliqueDto) {
    return this.cliquesService.update(+id, updateCliqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cliquesService.remove(+id);
  }
}
