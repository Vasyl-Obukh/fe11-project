import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './interfaces/comment.interface';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    async add(@Body() commentDto: CommentDto): Promise<Comment> {
        return this.commentsService.add(commentDto);
    }

    @Get()
    async get(@Query('articleId') articleId): Promise<Comment> {
        return articleId
            ? this.commentsService.getByArticle(articleId)
            : this.commentsService.get();
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
