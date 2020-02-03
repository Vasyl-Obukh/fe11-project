import { Schema, mongo } from 'mongoose';

export const ArticleSchema = new Schema({
    date: { type: Date, default: Date.now },
    title: { type: String, require: true },
    text: { type: String, require: true },
    overview: { type: String, require: true },
    thumbnailUrl: {
        resource_type: { type: String, require: true },
        type: { type: String, require: true },
        version: { type: Number, require: true },
        public_id: { type: String, require: true },
        format: { type: String, require: true },
    },
    categoriesId: { type: mongo.ObjectId, ref: 'Category', require: true},
});
