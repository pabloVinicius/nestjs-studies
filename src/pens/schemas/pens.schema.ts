import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'Pens' })
export class Pen {
  @Prop({ type: String, required: true })
  color: string;

  @Prop({ type: Number, required: true })
  size: number;
}

export const PenSchema = SchemaFactory.createForClass(Pen);
export type PenDocument = Pen & Document;
