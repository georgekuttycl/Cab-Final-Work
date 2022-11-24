const Login = require('./login')
const bookings = require('./booking');

Login.sync({alter: true});
bookings.sync({alter: true});