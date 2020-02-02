import { Image } from '../../cloud/interfaces/image.interface';

export class CreateArticleDto {
    // tslint:disable-next-line:variable-name
    readonly _id: string;
    readonly data: Date;
    readonly title: string;
    readonly text: string;
    readonly overview: string;
    readonly thumbnailUrl: string | Image;
}
