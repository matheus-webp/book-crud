import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: BookDTO) {
    return this.bookService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.bookService.delete(Number(id));
  }
}
