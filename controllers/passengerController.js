const db = require("../models/passenger");

module.exports.createProfile = (req, res, next) => {
    res.render("createProfile");
  };


  module.exports.profilePost = async (req, res, next) => {

          db.create({
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipcode,
            loginId: req.identity.user.id
          }).then((user) => {
            res.redirect("/passenger/createProfile");
          });

          }
