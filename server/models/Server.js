const express = require('express');
const cors = require('cors');
const { db } = require('../database/config');
const { usersRouter } = require('../routes/user.routes');
const { transferRouter } = require('../routes/transfer.routes');
const User = require('./user.model');
const Transfer = require('./transfer.model');


class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        //Path routes
        this.userPath = '/api/v1/users';
        this.transferPath = '/api/v1/transfer';

        //Connect to db
        this.database();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.userPath, usersRouter)
        this.app.use(this.transferPath, transferRouter)
    }

    database() {
        db.authenticate()
            .then(() => console.log('Database authenticated'))
            .catch(err => console.log(err));

        //relations
        User.hasMany(Transfer, { foreignKey: 'senderUserId', sourceKey: 'id' });
        Transfer.belongsTo(User, { targetKey: 'id', foreignKey: 'senderUserId' });

        db.sync()
            .then(() => console.log('Database synced'))
            .catch(err => console.log(err));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriento en puerto', this.port)
        })
    }

}

module.exports = Server