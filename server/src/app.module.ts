import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/blog'), CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
