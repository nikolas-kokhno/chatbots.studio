import { model, Schema } from 'mongoose';

const PostMasterSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    owner: {
        required: true,
        type: String
    }
});

export const PostMasterModel = model('PostMaster', PostMasterSchema);