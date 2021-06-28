import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './interfaces/book.interface';
import { Book as BookModel, BookMongoose } from './schemas/books.schema';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(BookModel.name)
    private readonly bookModel: Model<BookMongoose>,
  ) {}

  async getAll(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async create(book: Book): Promise<Book> {
    const newBook = await this.bookModel.create(book);
    return newBook;
  }

  async getBook(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  async updateBook(id: string, newData: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, newData, { new: true });
  }

  async deleteBook(id: string): Promise<any> {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
