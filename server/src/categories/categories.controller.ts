import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import { Category } from './interfaces/category.interface';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
  ) {}

  @Post()
  async add(@Body() categoryDto: CategoryDto): Promise<Category> {
    return this.categoriesService.add(categoryDto);
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
  async updateById(@Body() category: Category) {
    return this.categoriesService.updateById(category);
  }

  @Delete(':id')
  async deleteById(@Param('id') id): Promise<Category> {
    return this.categoriesService.deleteById(id);
  }
}
