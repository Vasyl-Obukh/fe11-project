import { Model, Query } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './interfaces/comment.interface';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel('Comment') private readonly commentModel: Model<Comment>,
    ) {}

    async add(commentDto: CommentDto): Promise<Comment> {
        const createdComment = new this.commentModel(commentDto);
        return createdComment.save();
    }

    async get(): Promise<Comment> {
        return this.commentModel.find().exec();
    }

    async getByArticle(articleId: string): Promise<Comment> {
        return this.commentModel.find({ articleId }).exec();
    }

    async updateById(comment: CommentDto): Promise<Query> {
        return this.commentModel.updateOne({ _id: comment._id }, comment);
    }

    async delete(id: string): Promise<Query> {
        return this.commentModel.deleteOne({ _id: id });
    }
}
