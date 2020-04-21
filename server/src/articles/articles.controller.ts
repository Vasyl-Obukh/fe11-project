import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArticlesService } from './articles.service';
import { CloudService } from '../cloud/cloud.service';
import { JsonParsePipe } from '../pipes/jsonParse.pipe';
import { mapData, createUrl } from '../cloud/imageUrl';
import { ArticleDto } from './dto/article.dto';
import { Image } from '../cloud/interfaces/image.interface';
import { Article } from './interfaces/article.interface';

@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly cloudService: CloudService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnailUrl'))
  async addArticle(
    @Body(new JsonParsePipe('categoriesId')) articleDto: ArticleDto,
    @UploadedFile() thumbnail,
  ) {
    const response: Readonly<Image> = await this.cloudService.uploadImage(thumbnail);
    return this.articlesService.add({
      ...articleDto,
      thumbnailUrl: mapData(response),
    });
  }

  @Get()
  async getAll(): Promise<Article[]> {
    return this.articlesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<Article> {
    const article: Article = await this.articlesService.getById(id);
    const thumbnailUrl = createUrl((article.thumbnailUrl as Image));

    // @ts-ignore
    return { ...article.toObject(), thumbnailUrl };
  }

  @Put()
  @UseInterceptors(FileInterceptor('thumbnailUrl'))
  async updateById(
    @Body(new JsonParsePipe('categoriesId')) articleDto: ArticleDto,
    @UploadedFile() thumbnail,
  ) {
    const oldArticle: Article = await this.articlesService.getById(articleDto._id);
    const response: Readonly<Image> = await this.cloudService.updateImage(
      thumbnail,
      (oldArticle.thumbnailUrl as Image).public_id,
    );

    return this.articlesService.updateById({
        ...articleDto,
        thumbnailUrl: mapData(response),
    });
  }

  @Delete(':id')
  async deleteById(@Param('id') id): Promise<Article> {
    return this.articlesService.deleteById(id);
  }
}
