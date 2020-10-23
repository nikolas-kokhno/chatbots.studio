import { validationResult } from 'express-validator';
import { CategoryModel } from '../models/CategoryModel';

class CategoryController {
    async getAll(req, res) {
        try {
            let category = await CategoryModel.find({}).exec();

            res.status(200).json({
                status: 'success',
                data: category
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
            let categoryID = req.params.id;
            let category = await CategoryModel.findById({ _id: categoryID });

            if(!category) {
                res.status(404).json({
                    status: 'success',
                    message: 'Category not found!'
                });
                return;
            }
            
            res.status(200).json({
                status: 'success',
                data: category
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
                name: req.body.name
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            let category = await CategoryModel.create(data);

            res.status(200).json({
                status: 'success',
                data: category
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
            let categoryID = req.params.id;

            let category = await CategoryModel.findById({ _id: categoryID });

            if(!category) {
                res.status(404).json({
                    status: 'success',
                    message: 'User not found!'
                });
                return;
            }

            let data = {
                name: req.body.name
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            await CategoryModel.updateOne({ _id: categoryID }, data);

            res.status(200).json({
                status: 'success',
                message: `Category with ${categoryID} ID updated successfully.`
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
            let categoryID = req.params.id;

            let category = await CategoryModel.findById({ _id: categoryID });

            if(!category) {
                res.status(404).json({
                    status: 'success',
                    message: 'User not found!'
                });
                return;
            }

            await CategoryModel.deleteOne({ _id: categoryID });
            
            res.status(200).json({
                status: 'success',
                message: `Category with ${categoryID} ID deleted successfully.`
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }
}

const CategoryCtrl = new CategoryController();
export default CategoryCtrl;