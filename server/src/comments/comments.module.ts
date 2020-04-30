import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentSchema } from './schemas/comment.schema';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { UserSchema } from '../users/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Comment', schema: CommentSchema}, {name: 'User', schema: UserSchema}]), UsersModule],
  controllers: [CommentsController],
  providers: [CommentsService, UsersService],
})
export class CommentsModule {}
