const { check } = require('express-validator');
const { validationResult } = require('express-validator');

exports.userCreateValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('phone_number')
        .isNumeric()
        .isLength({min:7,max:11})
        .withMessage('Must be numeric value and less than 11 characters'),
];



exports.runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array()[0].msg });
    }
    next();
};


