import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { ArticlesModule } from './articles/articles.module';
import { CloudModule } from './cloud/cloud.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/blog'), CategoriesModule, ArticlesModule, CloudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
