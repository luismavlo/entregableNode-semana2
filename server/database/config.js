const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'lm3153592788',
    database: 'bank',
    logging: false
})


module.exports = { db };