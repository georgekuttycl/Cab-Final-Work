const {sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const bookings = db.sequelize.define('bookings', {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    from: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    to: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    cabType: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    mobileNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
});

module.exports = bookings;