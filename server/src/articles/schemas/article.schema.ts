import { Schema } from 'mongoose';

export const ArticleSchema = new Schema({
    date: { type: Date, default: Date.now },
    title: String,
    text: String,
    overview: String,
});
