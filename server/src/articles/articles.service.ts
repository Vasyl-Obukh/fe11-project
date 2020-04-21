import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticlesService {
    constructor(
      @InjectModel('Article') private readonly articleModel: Model<Article>,
    ) {}

    add(articleDto: ArticleDto): Promise<Article> {
        const createdArticle: Model<Article> = new this.articleModel(articleDto);
        return createdArticle.save();
    }

    async getAll(): Promise<Article[]> {
        return this.articleModel.find();
    }

    async getById(id: string): Promise<Article> {
        return this.articleModel.findById(id);
    }

    async updateById(article: Article): Promise<Query> {
        return this.articleModel.findByIdAndUpdate(article._id, article);
    }

    async deleteById(id: string): Promise<Query> {
        return this.articleModel.findByIdAndDelete(id);
    }
}
