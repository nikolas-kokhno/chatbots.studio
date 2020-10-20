import { ProductModel } from '../models/ProductModel';
import { validationResult } from 'express-validator';

class ProductController {
    async getAll(req, res) {
        try {
            const product = await ProductModel.find({}).exec();

            res.status(200).json({
                status: 'success',
                message: product
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
            let productID = req.params.id;
            
            const product = await ProductModel.findById({ _id: productID }).exec();

            res.status(200).json({
                status: 'success',
                data: product
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
            const errors = validationResult(req);
            let data = {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                postmaster: req.body.postmaster,
                shelfLife: req.body.shelfLife,
                quantity: req.body.quantity
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            const product = await ProductModel.create(data);

            res.status(200).json({
                status: 'success',
                data: product
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
            const errors = validationResult(req);
            let productID = req.params.id;
            let data = {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                postmaster: req.body.postmaster,
                shelfLife: req.body.shelfLife,
                quantity: req.body.quantity
            }

            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array()
                });
                return;
            }

            await ProductModel.updateOne({_id: productID}, data);

            res.status(200).json({
                status: 'success',
                message: `Product with ${productID} ID updated successfully.`
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
            let productID = req.params.id;

            await ProductModel.deleteOne({ _id: productID });

            res.status(200).json({
                status: 'success',
                message: `Product with ${productID} ID deleted successfully.`
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }
    }
}

export const ProductCtrl = new ProductController();