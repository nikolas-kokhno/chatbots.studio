import { body } from 'express-validator';

const postMasterValidator = [
    body('name', 'Please enter company name')
        .isString().withMessage('Company name can only be a string.')
        .isLength({
            min: 2,
            max: 80
        }).withMessage('The company name must contain at least 2 and no more than 80 characters.'),
    
    body('owner', 'Please enter owner name')
    .isString().withMessage('Owner name can only be a string.')
    .isLength({
        min: 2,
        max: 200
    }).withMessage('The owner name must contain at least 2 and no more than 200 characters.'),
];

export default postMasterValidator;