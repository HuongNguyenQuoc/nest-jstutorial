import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { HttpExceptionFilter } from 'src/cats/exceptions/http-exception.filter';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
  }

  @Get()
  findAll() {
    throw new ForbiddenException();
  }
}
