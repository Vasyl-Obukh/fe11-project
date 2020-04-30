import { Image } from '../../cloud/interfaces/image.interface';

export class ArticleDto {
    // tslint:disable-next-line:variable-name
    readonly _id: string;
    readonly date: Date | undefined;
    readonly title: string;
    readonly text: string;
    readonly overview: string;
    readonly thumbnailUrl: string | Image;
    readonly categoriesId: string[];
    readonly commentsId: number;
}
