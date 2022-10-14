const { check, validationResult} = require('express-validator'); //Importing Express Validator, for Validating User Requests 

exports.validateRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('Firstname is Requied'),
    check('lastName')
    .notEmpty()
    .withMessage('Lastname is Requied'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Valid email is Requied'),
    check('password')
    .isLength({min: 6})
    .withMessage('Password must be atleast 6 Characters long')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length>0)
    {
        return res.status(400).json({error: errors.array()[0].msg})
    }
}