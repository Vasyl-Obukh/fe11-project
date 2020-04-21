import { Schema, mongo } from 'mongoose';

export const CommentSchema = new Schema({
    date: { type: Date, default: Date.now },
    text: { type: String, require: true },
    validated: { type: Boolean, default: false },
    userId: { type: mongo.ObjectId, ref: 'User', require: true },
    articleId: { type: mongo.ObjectId, ref: 'Article', require: true },
});
