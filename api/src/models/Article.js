import { Schema, model } from 'mongoose';

const ArticleSchema = new Schema({
    title: String,
    description: String,
    imageURL: String
});

export default model('Articles', ArticleSchema);
