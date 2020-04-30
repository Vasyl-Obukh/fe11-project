import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './interfaces/comment.interface';
import { UsersService } from '../users/users.service';
import { User } from '../users/interfaces/user.interface';

@Controller('comments')
export class CommentsController {
    constructor(
      private readonly commentsService: CommentsService,
      private readonly usersService: UsersService,
    ) {}

    @Post()
    async add(@Body() commentDto: CommentDto): Promise<Comment> {
        return this.commentsService.add(commentDto);
    }

    @Get()
    async get(@Query('articleId') articleId): Promise<Comment[]> {
        const comments: Comment[] = articleId
            ? await this.commentsService.getByArticle(articleId)
            : await this.commentsService.get();
        const users: User[] = await this.usersService.getAll();
        // @ts-ignore
        return comments.map(comment => ({ ...comment.toObject(),
            userName: users.find(({ _id }) => comment.userId.toString() === _id.toString())?.name,
        }));
    }

    @Put()
    async update(@Body() commentDto: CommentDto) {
        return this.commentsService.updateById(commentDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Comment> {
        return this.commentsService.delete(id);
    }
}
