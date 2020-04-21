import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { ArticlesModule } from './articles/articles.module';
import { CloudModule } from './cloud/cloud.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/blog'),
      CategoriesModule,
      ArticlesModule,
      CloudModule,
      CommentsModule,
      AuthModule,
      UsersModule,
  ],
})
export class AppModule {}
