import { model, Schema } from 'mongoose'; 

const CategorySchema = new Schema({
    name: {
        required: true,
        type: String
    }
});

export const CategoryModel = model('Category', CategorySchema);