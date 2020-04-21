import { Model, Query } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async add(categoryDto: CategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(categoryDto);
    return createdCategory.save();
  }

  async getAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getById(id: string): Promise<Category> {
    return this.categoryModel.find({ _id: id }).exec();
  }

  async updateById(category: Category): Promise<Query> {
    return this.categoryModel.updateOne({ _id: category._id }, category);
  }

  async deleteById(id: string): Promise<Query> {
    return this.categoryModel.deleteOne({ _id: id });
  }
}
