import { validationResult } from 'express-validator';
import { PostMasterModel } from '../models/PostMasterModel';

class PostMasterController {
    async getAll(req, res) {
        try {
            let postMaster = await PostMasterModel.find({}).exec();

            res.status(200).json({
                status: 'success',
                data: postMaster
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

    async getByID(req, res) {
        try {
            let postMasterID = req.params.id;
            let postMaster = await PostMasterModel.findById({ _id: postMasterID });

            if(!postMaster) {
                res.status(404).json({
                    status: 'error',
                    message: 'Post-master data not found!'
                });
                return;
            }

            res.status(200).json({
                status: 'success',
                data: postMaster
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

    async create(req, res) {
        try {
            let errors = validationResult(req);
            let data = {
                name: req.body.name,
                owner: req.body.owner
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            let postMaster = await PostMasterModel.create(data);

            res.status(200).json({
                status: 'success',
                data: postMaster
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

    async update(req, res) {
        try {
            let errors = validationResult(req);
            let postMasterID = req.params.id;

            let postMaster = await PostMasterModel.findById({ _id: postMasterID });

            if(!postMaster) {
                res.status(404).json({
                    status: 'success',
                    message: 'Post-master data not found!'
                });
                return;
            }

            let data = {
                name: req.body.name,
                owner: req.body.owner
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            await PostMasterModel.updateOne({ _id: postMasterID }, data);

            res.status(200).json({
                status: 'success',
                message: `Post-master data with ${postMasterID} ID updated successfully.`
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

    async delete(req, res) {
        try {
            let postMasterID = req.params.id;
            let postMaster = await PostMasterModel.findById({ _id: postMasterID });

            if(!postMaster) {
                res.status(404).json({
                    status: 'error',
                    message: 'Post-master data not found!'
                });
                return;
            }

            await PostMasterModel.deleteOne({ _id: postMasterID });

            res.status(200).json({
                status: 'success',
                message: `Post-master data with ${postMasterID} ID deleted successfully.`
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }
}

const PostMasterCtrl = new PostMasterController();
export default PostMasterCtrl;