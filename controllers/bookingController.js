const db = require('../models/booking');

module.exports.addBooking = (req, res, next)=>{

    db.create({
        from: req.body.from,
        to: req.body.to,
        cabType: req.body.password,
        mobileNumber: req.body.password,
    })
    .then((user)=>{
        res.json(user);
    })
}

