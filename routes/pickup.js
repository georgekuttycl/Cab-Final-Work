const express = require('express');
const cc = require('../controllers/adminController');

const router = express.Router()

router.get('/admin/addpickup', cc.showPickup);
router.post('/admin/addpickup', cc.createPickups);

router.get('/admin/pickupList',cc.showPickupList);


router.get('/admin/pickupList/:id',cc.getUpdatePickup);
router.post('/admin/pickupList/:id',cc.getUpdatePickupPost);

router.get('/admin/pickupList/delete/:id', cc.deletePickupList);


module.exports = router;