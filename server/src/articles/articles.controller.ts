import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CloudService } from '../cloud/cloud.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';

const CLOUDINARY_DOMAIN_NAME = 'res.cloudinary.com';

enum HTTP_TYPE {
    HTTP = 'http',
    HTTPS = 'https',
}

const createUrl = ({resource_type, type, version, public_id, format}, secure) => `${secure ? HTTP_TYPE.HTTPS : HTTP_TYPE.HTTP}://${CLOUDINARY_DOMAIN_NAME}/${process.env.CLOUD_NAME}/${resource_type}/${type}/v${version}/${public_id}.${format}`;

@Controller('articles')
export class ArticlesController {
    constructor(
        private readonly articlesService: ArticlesService,
        private readonly cloudService: CloudService,
    ) {}

    @Post()
    @UseInterceptors(FileInterceptor('thumbnailUrl'))
    async addArticle(@Body() createArticleDto: CreateArticleDto, @UploadedFile() thumbnail) {
        const response = await this.cloudService.uploadImage(thumbnail);
        // tslint:disable-next-line:no-console
        console.log(createUrl(response, false));
        return this.cloudService.uploadImage(thumbnail);
    }
}
