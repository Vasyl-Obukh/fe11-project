export class CommentDto {
    // tslint:disable-next-line:variable-name
    readonly _id: string;
    readonly date: Date | undefined;
    readonly text: string;
    readonly userId: string;
    readonly articleId: string;
    readonly validated: boolean;
    readonly userName: string;
}
