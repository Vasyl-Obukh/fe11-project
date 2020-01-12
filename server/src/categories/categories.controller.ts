import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { Category } from './interfaces/category.interface';
import {CategoriesService} from './categories.service';
import {CreateCategoryDto} from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }

  @Post()
  async add(@Body() createCategoryDto: CreateCategoryDto) {
    await this.categoriesService.add(createCategoryDto);
  }

  // @Get(':id')
  // getById(@Param() params): Category {
  //   return mockCategories.find(({ id }) => id === params.id);
  // }
}
