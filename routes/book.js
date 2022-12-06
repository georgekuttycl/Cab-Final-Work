const express = require('express');
const bookingController = require('../controllers/bookController');
const adminController = require('../controllers/adminController');



const router = express.Router();

// router.post('/', bookingController.createBooking);


//invoice

router.get('/passenger/invoice/:id',bookingController.getInvoice)


//driver

router.get('/driver/check',bookingController.checkRides)
router.get('/driver/check/change/:id',bookingController.acceptOffer)

//myRides
router.get('/driver/myrides',bookingController.myRides)

//Admin
//Reports
router.get('/admin/bookingReports',adminController.getBookingReports)

module.exports = router;