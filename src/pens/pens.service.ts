import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PenDocument, Pen } from './schemas/pens.schema';
import { PenDTO } from './dto/pens.dto';

@Injectable()
export class PensService {
  constructor(
    @InjectModel(Pen.name) private readonly penModel: Model<PenDocument>,
  ) {}

  async create(penDTO: PenDTO): Promise<PenDTO> {
    return await this.penModel.create(penDTO);
  }

  async findAll(): Promise<Pen[]> {
    return await this.penModel.find().exec();
  }

  async findOne(id: string): Promise<Pen> {
    return await this.penModel.findById(id);
  }

  async updatePen(id: string, penDTO: PenDTO): Promise<Pen> {
    return await this.penModel.findByIdAndUpdate(id, penDTO, { new: true });
  }

  async deletePen(id: string): Promise<Pen> {
    return await this.penModel.findByIdAndDelete(id);
  }
}
