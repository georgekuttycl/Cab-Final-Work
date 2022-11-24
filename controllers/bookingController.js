const db = require('../models/booking');

module.exports.addBooking = (req, res, next)=>{
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400)
    //     .json({
    //         errors: errors.array()
    //     });
    // }

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

