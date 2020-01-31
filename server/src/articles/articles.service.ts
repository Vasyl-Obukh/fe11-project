import { Injectable } from '@nestjs/common';
import {CreateArticleDto} from './dto/create-article.dto';

@Injectable()
export class ArticlesService {
    addArticle(createArticleDto: CreateArticleDto) {
        return;
    }
}
