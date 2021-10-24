import { PartialType } from '@nestjs/mapped-types';
import { CreateCliqueDto } from './create-clique.dto';

export class UpdateCliqueDto extends PartialType(CreateCliqueDto) {}
