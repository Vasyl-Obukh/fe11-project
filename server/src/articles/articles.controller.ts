import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CloudService } from '../cloud/cloud.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { mapData } from '../cloud/imageUrl';
import { Image } from '../cloud/interfaces/image.interface';

@Controller('articles')
export class ArticlesController {
    constructor(
        private readonly articlesService: ArticlesService,
        private readonly cloudService: CloudService,
    ) {}

    @Post()
    @UseInterceptors(FileInterceptor('thumbnailUrl'))
    async addArticle(@Body() createArticleDto: CreateArticleDto, @UploadedFile() thumbnail) {
        const response: Readonly<Image> = await this.cloudService.uploadImage(thumbnail);
        return this.articlesService.add({...createArticleDto, thumbnailUrl: mapData(response)});
    }
}
