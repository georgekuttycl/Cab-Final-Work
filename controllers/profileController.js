// const passenger = require("../models/passenger");
// const Login = require("../models/login");

const {passenger, Login, login, driver} = require('../models/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');


module.exports.showProfile = (req, res, next) => {
    res.render("profile");
  };

  module.exports.showDriverProfile = (req, res, next) => {
    res.render("driverProfile");
  };

  module.exports.CreateDriverProfile = (req, res, next) => {
    res.render("createDriverProfile");
  };

  module.exports.getProfile = async (req, res, next) => {
    passenger.findOne({
      include: 'login',
      required:true
    }).then(movies => {
        res.render('profile', {
            data: movies,
        });
    });

}


module.exports.getUpdateProfile = async (req, res, next) => {
  passenger.findByPk(req.params.id,{
    include: 'login',
    required:true
  }).then(profileFromDb => {
      res.render('updateProfile', {
          data: profileFromDb,
      });
  });

}


module.exports.getUpdateProfilePost = async (req, res, next) => {
  await passenger.update(
      {
        address: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zip
      },
      {
          where: {passengerId: req.params.id}
      }
  )
  res.redirect('/passenger/profile');
}

module.exports.createBooking = async (req, res, next) => {
  driver.create({
    lisence: req.body.lisence,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipcode,
    loginId: req.identity.user.id
      })
      .then(movieFromDb => {
          res.redirect("/driver/profile");
      })
}

module.exports.showProfile = async (req, res, next) => {
  driver.findOne({
    include: 'login',
    required:true
  }).then(driverData => {
    console.log(driverData);
      res.render('driverProfile', {
          data: driverData,
      });
  });

}

//update driver details

module.exports.getUpdateDriverProfile = async (req, res, next) => {
  driver.findByPk(req.params.id,{
    include: 'login',
    required:true
  }).then(profileFromDb => {
      res.render('updateDriverProfile', {
          data: profileFromDb,
      });
  });

}


module.exports.getUpdateDriverProfilePost = async (req, res, next) => {
  await driver.update(
      {
        address: req.body.street,
        lisence:req.body.lisence,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zip
      },
      {
          where: {driverId: req.params.id}
      }
  )
  res.redirect('/driver/profile');
}