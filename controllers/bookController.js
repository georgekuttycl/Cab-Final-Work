const db = require("../models/booking");


module.exports.getBooking = (req, res, next) => {
    res.render("booking");
  };
