const {login,booking,passenger,driver,pickup} = require('./models')

login.sync({force: true});
booking.sync({force: true});
passenger.sync({force: true});
driver.sync({force: true});
pickup.sync({force: true});