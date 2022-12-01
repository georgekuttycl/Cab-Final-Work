const {login,booking,passenger} = require('./models')

login.sync({force: true});
booking.sync({force: true});
passenger.sync({force: true});