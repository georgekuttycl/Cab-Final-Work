const {sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const login = db.sequelize.define('login', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    mobileNumber: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

});

module.exports = login;