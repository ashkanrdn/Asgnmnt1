const check = require('express-validator').check;

exports.validateRegistration = [
    check('firstName').not().isEmpty().withMessage('first name should not be empty').isAlpha().withMessage('should only contain chars').trim(),
    check('lastName').not().isEmpty().withMessage('last name should not be empty').isAlpha().withMessage('should only contain chars').trim(),
    check('email').isEmail().withMessage('follow email format').not().isEmpty().withMessage('email should not be empty').normalizeEmail(),
    check('password').isLength({ min: 5 }).withMessage('pass should at least be 5 chars long').trim()

];

exports.validateLogin = [
    check('email').isEmail().withMessage('follow email format').not().isEmpty().withMessage('email should not be empty').normalizeEmail(),

    check('password').isLength({ min: 5 }).withMessage('pass should at least be 5 chars long')

];

exports.validateEvent = [
    check('conTopic').not().isEmpty().withMessage('Topic should not be empty').trim(),
    check('conTitle').not().isEmpty().withMessage('Title should not be empty').trim(),
    check('conHost').not().isEmpty().withMessage('Host should not be empty').trim(),
    check('conDetails').not().isEmpty().withMessage('Details should not be empty').trim(),
    check('conLocation').not().isEmpty().withMessage('Location should not be empty').trim(),
    check('conDate').not().isEmpty().withMessage('year should not be empty').isInt({ gt: 1850, lt: 2020 }).trim(),


]