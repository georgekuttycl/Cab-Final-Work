const express = require('express');
const controller = require('../controllers/accountsController');
const profileController = require('../controllers/profileController');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/login', controller.login);
router.post('/login', controller.loginPost);



router.get('/profile', profileController.getProfile);
module.exports = router;