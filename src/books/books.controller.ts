import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async create(@Body() body: CreateBookDto): Promise<Book> {
    return await this.booksService.create(body);
  }

  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getBook(@Param('id') id): Promise<Book> {
    return this.booksService.getBook(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id,
    @Body() body: CreateBookDto,
  ): Promise<Book> {
    return this.booksService.updateBook(id, body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id) {
    return this.booksService.deleteBook(id);
  }
}
