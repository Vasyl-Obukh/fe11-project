import { Schema, mongo } from 'mongoose';

export const ArticleSchema = new Schema({
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
    text: { type: String, required: true },
    overview: { type: String, required: true },
    thumbnailUrl: {
        resource_type: { type: String, required: true },
        type: { type: String, required: true },
        version: { type: Number, required: true },
        public_id: { type: String, required: true },
        format: { type: String, required: true },
    },
    categoriesId: [{ type: mongo.ObjectId, ref: 'Category', required: true}],
    commentsId: [{ type: mongo.ObjectId, ref: 'Comment' }],
});
