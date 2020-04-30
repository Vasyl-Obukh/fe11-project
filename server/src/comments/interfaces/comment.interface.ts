import { Document } from 'mongoose';

export interface Comment extends Document {
    _id: string;
    date: Date;
    text: string;
    validated: boolean;
    userId: string;
    articleId: string;
    userName: string;
}
