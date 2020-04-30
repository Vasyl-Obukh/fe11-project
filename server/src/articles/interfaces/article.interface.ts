import { Document } from 'mongoose';
import { Image } from '../../cloud/interfaces/image.interface';

export interface Article extends Document {
    _id: string;
    date: Date;
    title: string;
    text: string;
    overview: string;
    thumbnailUrl: Image | string;
    categoriesId: string[];
    commentsId: number;
}
