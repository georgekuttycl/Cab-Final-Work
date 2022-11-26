const express = require('express');
const cc = require('../controllers/indexController');

const router = express.Router()

router.get('/', cc.index);


module.exports = router;