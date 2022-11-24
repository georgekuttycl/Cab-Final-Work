const express = require('express');
const controller = require('../controllers/loginController');
const profileController = require('../controllers/profileController');

const router = express.Router()

router.get('/', controller.login);
router.get('/index', controller.index);
router.get('/', controller.signup);
router.post('/', controller.signup);
router.get('/login', controller.loginPost);
router.post('/login', controller.loginPost);


router.get('/profile', profileController.getProfile);
module.exports = router;