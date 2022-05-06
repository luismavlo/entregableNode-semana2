const { Router } = require("express");
const { check } = require("express-validator");
const { register, login, getHistory } = require("../controllers/user.controller");
const { accountExist, existUserPerIdParams } = require("../middlewares/user.middleware");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();


router.post('/signup', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'the password is mandatory and must have a minimum of 8 characters').isLength({ min: 8 }),
    validateFields
], register)


router.post('/login', [
    check('accountNumber', 'The entered account number is mandatory and must have a minimum of 6 characters').isLength({ min: 6 }),
    check('password', 'the password is mandatory and must have a minimum of 8 characters').isLength({ min: 8 }),
    validateFields,
    accountExist
], login)


router.get('/:id/history', existUserPerIdParams, getHistory)


module.exports = {
    usersRouter: router
}