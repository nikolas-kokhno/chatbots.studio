import { body } from 'express-validator';

export const categoryValidator = [
    body('name', 'Please enter product name')
        .isString().withMessage('Product name can only be a string.')
        .isLength({
            min: 2,
            max: 80
        }).withMessage('The product name must contain at least 2 and no more than 80 characters.')
];