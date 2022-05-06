const { Router } = require("express");
const { check } = require("express-validator");
const { transferAmount } = require("../controllers/transfer.controller");
const { accountExist, existAccountPerId } = require("../middlewares/user.middleware");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();


router.post('/', [
    check('amount', 'the amount to be transferred is mandatory').not().isEmpty(),
    check('accountNumber', 'account number is required').not().isEmpty(),
    check('senderUserId', 'the sending userId is required').not().isEmpty(),
    validateFields,
    existAccountPerId,
    accountExist,
], transferAmount)


module.exports = {
    transferRouter: router
}