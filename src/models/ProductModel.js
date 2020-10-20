import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: String
    },
    postmaster: {
        required: true,
        type: String
    },
    shelfLife: {
        required: true,
        type: Number
    },
    quantity: {
        required: true,
        type: Number
    }
});

export const ProductModel = model('Product', ProductSchema);