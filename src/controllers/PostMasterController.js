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

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

    async create(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

    async update(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }

    async delete(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }
}

export const PostMasterCtrl = new PostMasterController();