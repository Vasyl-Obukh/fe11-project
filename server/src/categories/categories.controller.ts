import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { Category } from './interfaces/category.interface';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async add(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.add(createCategoryDto);
  }

  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<Category> {
    return this.categoriesService.getById(id);
  }

  @Put()
  async updateById(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.updateById(createCategoryDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id): Promise<Category> {
    return this.categoriesService.deleteById(id);
  }
}
