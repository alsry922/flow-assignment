require('dotenv').config();

module.exports = {
    development: {
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: 'flow-assignment',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: 'root',
        password: null,
        database: process.env.DB_PASSWORD,
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false,
    }
};