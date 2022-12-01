// const passenger = require("../models/passenger");
// const Login = require("../models/login");

const {passenger, Login, login} = require('../models/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');


module.exports.showProfile = (req, res, next) => {
    res.render("profile");
  };


  module.exports.getProfile = async (req, res, next) => {
    passenger.findOne({
      include: 'login',
      required:true
    }).then(movies => {
        // console.log("movies", movies.get({plain: true}));
        // console.log("movies", movies);
        res.render('profile', {
            data: movies,
        });
    });

}

//   module.exports.getUpdateProfile = async(req, res, next) => {
//     passenger.findByPk(req.params.id)
//         .then(profileFromDb => {
//             res.render('updateProfile', {
//                 data: profileFromDb
//             });
//         });
// }

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