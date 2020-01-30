import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudService } from '../cloud/cloud.service';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { ArticleSchema } from './schemas/article.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Article', schema: ArticleSchema}])],
  controllers: [ArticlesController],
  providers: [ArticlesService, CloudService],
})
export class ArticlesModule {}
