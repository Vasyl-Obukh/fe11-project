import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CloudService } from '../cloud/cloud.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('articles')
export class ArticlesController {
    constructor(
        private readonly articlesService: ArticlesService,
        private readonly cloudService: CloudService,
    ) {}

    @Post()
    @UseInterceptors(FileInterceptor('thumbnailUrl'))
    async add(@Body() createArticleDto: CreateArticleDto, @UploadedFile() thumbnail) {
        return this.cloudService.uploadImage(thumbnail);
    }
}
