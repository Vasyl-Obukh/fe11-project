import { Document } from 'mongoose';
import { Image } from '../../cloud/interfaces/image.interface';

export interface Article extends Document {
    _id: string;
    data: Date;
    title: string;
    text: string;
    overview: string;
    thumbnailUrl: string | Image;
    categoriesId: string[];
}
