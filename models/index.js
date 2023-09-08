const Sequelize = require('sequelize');
const Extension = require('./extensions');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

const db = {};
const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Extension = Extension;

Extension.initiate(sequelize);

module.exports = db;