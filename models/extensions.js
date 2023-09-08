const Sequelize = require('sequelize');

class Extension extends Sequelize.Model {
    static initiate(sequelize) {
        Extension.init({
            name: {
                type: Sequelize.STRING(10),
                allowNull: false,
                unique: true,
            },

        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Extension',
            tableName: 'extensions',
            charset: 'utf8',
            collate: 'utf8_general_cli',
        })
    }

    static associate(db) {

    }
}

module.exports = Extension;