const express = require('express');
const controller = require('../controllers/passengerController');
const profileController = require('../controllers/profileController');


const router = express.Router();

router.get('/passenger/createProfile', controller.createProfile);
router.post('/passenger/createProfile', controller.profilePost);


// router.get('/passenger/Profile', profileController.showProfile);
router.get('/passenger/profile', profileController.getProfile);




module.exports = router;