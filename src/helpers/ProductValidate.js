import { body } from 'express-validator';

const productValidator = [
    body('name', 'Please enter product name')
        .isString().withMessage('Product name can only be a string.')
        .isLength({
            min: 2,
            max: 80
        }).withMessage('The product name must contain at least 2 and no more than 80 characters.'),
    
    body('price', 'Please enter price product')
        .isNumeric().withMessage('Product price can only be a number.')
        .isLength({
            min: 0,
            max: 9999
        }).withMessage('The price must not be less than 0 or exceed 9999.'),
    
    body('category', 'Please enter category name')
    .isString().withMessage('Category name can only be a string.')
    .isLength({
        min: 2,
        max: 80
    }).withMessage('The category name must contain at least 2 and no more than 80 characters.'),

    body('postmaster', 'Please enter postmaster name')
    .isString().withMessage('Postmaster name can only be a string.')
    .isLength({
        min: 2,
        max: 80
    }).withMessage('The postmaster name must contain at least 2 and no more than 80 characters.'),

    body('shelfLife', 'Please enter shelf-life product')
        .isNumeric().withMessage('Shelf-life can only be a number.')
        .isLength({
            min: 0,
            max: 9999
        }).withMessage('The shelf-life must not be less than 0 or exceed 9999.'),
    
    body('quantity', 'Please enter quantity product')
    .isNumeric().withMessage('Quantity can only be a number.')
    .isLength({
        min: 0,
        max: 9999
    }).withMessage('The quantity must not be less than 0 or exceed 9999.'),
];

export default productValidator;