import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadImage } from '../cloud';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}

    @Post()
    @UseInterceptors(FileInterceptor('thumbnailUrl'))
    async add(@Body() createArticleDto: CreateArticleDto, @UploadedFile() thumbnail) {
        const stream = await uploadImage(thumbnail);
        return stream;
    }
}
