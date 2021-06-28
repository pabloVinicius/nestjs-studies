import { Document as DocumentMongoose } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'books', autoCreate: false, autoIndex: true })
export class Book {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  value: number;

  @Prop({ type: Number, required: true, min: 0, max: 5 })
  rating: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

export type BookMongoose = Book & DocumentMongoose;
