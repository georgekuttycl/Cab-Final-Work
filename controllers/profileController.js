const passenger = require("../models/passenger");
const login = require("../models/login");



module.exports.showProfile = (req, res, next) => {
    res.render("profile");
  };


  module.exports.getProfile = (req, res, next) => {
    passenger.findAll({
        include: [{all: true}]
    }).then(movies => {

        res.render('profile', {
            data: movies,

        });
    })
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