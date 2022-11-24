const express = require('express');
const cc = require('../controllers/bookingController');

const router = express.Router()

router.post('/booking', cc.addBooking);

module.exports = router;