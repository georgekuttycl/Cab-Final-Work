const Login = require('./login')
const bookings = require('./booking');
const passenger = require('./passenger');

Login.hasOne(passenger);
passenger.belongsTo(Login, {
    foreignKey:{
        name:'loginId',
        field:'loginId',
        allowNull:false
    }
});

Login.sync({alter: true});
bookings.sync({alter: true});
passenger.sync({alter: true});