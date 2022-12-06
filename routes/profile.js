const express = require('express');
const controller = require('../controllers/passengerController');
const profileController = require('../controllers/profileController');
const bookingController = require('../controllers/bookController');
const adminController = require('../controllers/adminController');
const cc = require('../controllers/adminController');


const router = express.Router();


router.get('/passenger/createProfile', controller.createProfile);
router.post('/passenger/createProfile', controller.profilePost);


// router.get('/passenger/Profile', profileController.showProfile);
router.get('/passenger/profile', profileController.getProfile);


router.get('/passenger/updateprofile/:id', profileController.getUpdateProfile);
router.post('/passenger/updateprofile/:id', profileController.getUpdateProfilePost);


router.get('/passenger/booking', bookingController.getBooking);
router.post('/passenger/booking', bookingController.createBooking);


router.get('/passenger/bookingview', bookingController.getBookingView);


router.get('/passenger/bookinglist', bookingController.getBookingList);


router.get('/passenger/bookinglist/:id', bookingController.UpdateBookingList);
router.post('/passenger/bookinglist/:id', bookingController.updateBooking);


router.get('/passenger/bookinglist/delete/:id', bookingController.delete);


router.get('/passenger/payment', bookingController.getPayement);


router.get('/driver/create', profileController.CreateDriverProfile);
router.post('/driver/create', profileController.createBooking);


router.get('/driver/profile', profileController.showProfile);
router.get('/driver/updateprofile/:id', profileController.getUpdateDriverProfile);
router.post('/driver/updateprofile/:id', profileController.getUpdateDriverProfilePost);


//admin controller
//add pickup

//admin home
router.get('/admin/dashboard',adminController.getadminDashboard)


module.exports = router;