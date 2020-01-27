import { Model, Query } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) {}

  async add(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async getAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getById(id: string): Promise<Category> {
    return this.categoryModel.find({_id: id}).exec();
  }

  async updateById(category: Category): Promise<Query> {
    return this.categoryModel.updateOne({_id: category._id}, category);
  }

  async deleteById(id: string): Promise<Query> {
    return this.categoryModel.deleteOne({_id: id});
  }
}
