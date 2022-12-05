const express = require('express');
const bookingController = require('../controllers/bookController');



const router = express.Router();

// router.post('/', bookingController.createBooking);


//invoice

router.get('/passenger/invoice/:id',bookingController.getInvoice)




module.exports = router;