const express = require('express');
const parser = require('body-parser');
const loginRoute = require('./routes/login')
const bookingRoute = require('./routes/booking')
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(loginRoute);


app.listen(80)