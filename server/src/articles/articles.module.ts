import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudModule } from '../cloud/cloud.module';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { ArticleSchema } from './schemas/article.schema';
import { CommentsModule } from '../comments/comments.module';
import { CommentsService } from '../comments/comments.service';
import { CommentSchema } from '../comments/schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Article',
      schema: ArticleSchema,
    }, {name: 'Comment', schema: CommentSchema}]), CloudModule, CommentsModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, CommentsService],
})
export class ArticlesModule {}
