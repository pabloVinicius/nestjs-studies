import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PenResolver } from './pens.resolver';
import { PensService } from './pens.service';
import { Pen, PenSchema } from './schemas/pens.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pen.name,
        schema: PenSchema,
      },
    ]),
  ],
  providers: [PenResolver, PensService],
})
export class PensModule {}
