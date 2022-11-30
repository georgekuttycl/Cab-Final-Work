const Login = require('./login')
const bookings = require('./booking');
const passenger = require('./passenger');


passenger.belongsTo(Login, {constraints: true, onDelete: 'CASCADE'});
Login.hasOne(passenger);

Login.sync({force: true});
bookings.sync({force: true});
passenger.sync({force: true});