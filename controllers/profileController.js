const passenger = require("../models/passenger");
const Login = require("../models/login");
const { json } = require("body-parser");



module.exports.showProfile = (req, res, next) => {
    res.render("profile");
  };


  module.exports.getProfile = (req, res, next) => {
    passenger.findOne({
        model: Login, as: 'Login'
    }).then(movies => {
        console.log("movies", movies.get({plain: true}));
        console.table(movies.dataValues)

        res.render('profile', {
            data: movies,
        });
    });
}


// module.exports.getProfile = (req, res, next) => {
//     login.findAll({
//         where: {
//             id: 7
//           }
//     }).then(result => {
//         console.log(result);
//         res.render('sample', {
//             data: result
//         });
//     })
// }