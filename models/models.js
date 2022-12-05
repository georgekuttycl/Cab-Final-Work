const {sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const login = db.sequelize.define('login', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
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

const booking = db.sequelize.define('bookings', {
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
    loginId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {         // User belongsTo Company 1:1
            model: login,
            key: 'id'
        }
    }
});

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
        allowNull:false,
        references: {         // User belongsTo Company 1:1
            model: login,
            key: 'id'
        }
    }

});

const driver = db.sequelize.define('driver', {
    driverId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lisence: {
        type: DataTypes.STRING(100),
        allowNull: false,
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
        allowNull:false,
        references: {         // User belongsTo Company 1:1
            model: login,
            key: 'id'
        }
    }

});

const pickup = db.sequelize.define('pickup',{

    pickId: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,

    },
     pickupPoint: {
         type: DataTypes.STRING(50),
         allowNull: false,

     },

     destination:{
         type: DataTypes.STRING(50),
         allowNull: false,

     },
     amount: {
        type: DataTypes.INTEGER,
        allowNull: false

    }

 });

login.hasOne(passenger);
passenger.belongsTo(login, {constraints: true, onDelete: 'CASCADE'});

login.hasOne(booking);
booking.belongsTo(login, {constraints: true, onDelete: 'CASCADE'});

login.hasOne(driver);
driver.belongsTo(login, {constraints: true, onDelete: 'CASCADE'});

module.exports.login = login;
module.exports.booking = booking;
module.exports.passenger = passenger;
module.exports.driver = driver;
module.exports.pickup = pickup;