const express = require('express');
const controller = require('../controllers/accountsController');
const profileController = require('../controllers/passengerController');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/login', controller.login);
router.post('/login', controller.loginPost);

router.get('/logout',controller.logout);

// router.get('/profile', profileController.getProfile);
module.exports = router;