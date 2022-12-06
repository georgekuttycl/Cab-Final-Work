const {login,booking,passenger,driver,pickup} = require('./models')

login.sync({alter: true});
driver.sync({alter: true});
passenger.sync({alter: true});
booking.sync({alter: true});
pickup.sync({alter: true});