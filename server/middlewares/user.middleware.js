const { response } = require('express');
const User = require('../models/user.model');

const accountExist = async (req, res = response, next) => {

    const { accountNumber } = req.body;

    try {

        const user = await User.findOne({ where: { accountNumber } });
        //verify if exist account
        if (!user) {
            return res.status(400).json({
                msg: 'the account is not registered'
            })
        }
        //verify if account is active
        if (!user.status) {
            return res.status(400).json({
                msg: 'the account is not registered'
            })
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(500).json({
            msg: 'hable con el administrador - '
        })
    }
}

const existAccountPerId = async (req, res = response, next) => {
    const { senderUserId } = req.body;

    try {
        const user = await User.findByPk(senderUserId)


        if (!user) {
            return res.status(400).json({
                msg: 'error in the transfer, the account that sends the money does not exist'
            })
        }

        if (!user.status) {
            return res.status(400).json({
                msg: 'the account is not registered'
            })
        }

        next();

    } catch (error) {
        res.status(500).json({
            msg: 'hable con el administrador'
        })
    }
}

const existUserPerIdParams = async (req, res = response, next) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id)


        if (!user) {
            return res.status(400).json({
                msg: 'error in the transfer, the account that sends the money does not exist'
            })
        }

        if (!user.status) {
            return res.status(400).json({
                msg: 'the account is not registered'
            })
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(500).json({
            msg: 'hable con el administrador'
        })
    }
}




module.exports = { accountExist, existAccountPerId, existUserPerIdParams }