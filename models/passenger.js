const {sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const passenger = db.sequelize.define('passenger', {
    passengerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },

    zipCode: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    loginId:{
        type: DataTypes.INTEGER,
        allowNull:false
    }

});

module.exports = passenger;