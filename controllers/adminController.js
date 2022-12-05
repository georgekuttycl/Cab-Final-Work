const {passenger, Login, login, driver,pickup} = require('../models/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');

module.exports.showPickup = (req, res, next) => {
    res.render("addPickup");
  };

  module.exports.createPickups = async (req, res, next) => {
    pickup.create({
        pickupPoint: req.body.source,
        destination: req.body.destination,
        amount: req.body.amount,
        })
        .then(movieFromDb => {
            res.redirect("/admin/addpickup");
        })
}

//show pickup list


module.exports.showPickupList = async (req, res, next) => {
    pickup.findAll()
    .then(result => {
        res.render('pickupList', {
            data: result,
        });
    });

  }

  //pickupList update
  module.exports.getUpdatePickup = async (req, res, next) => {
    pickup.findByPk(req.params.id)
    .then(profileFromDb => {
        res.render('pickupListUpdate', {
            data: profileFromDb,
        });
    });

  }


  module.exports.getUpdatePickupPost = async (req, res, next) => {
    await pickup.update(
        {
            pickupPoint: req.body.source,
            destination: req.body.destination,
            amount: req.body.amount,
        },
        {
            where: {pickId: req.params.id}
        }
    )
    res.redirect('/admin/pickupList');
  }

  //delete pickuplist

  module.exports.deletePickupList = async (req, res, next) => {
    let id = req.params.id;
    let movieFromDb = await pickup.findByPk(id);
    if (movieFromDb != null) {
        await pickup.destroy({
            where: {
                pickId: id
            }
        });
        res.redirect("/admin/pickupList");
    }
  }