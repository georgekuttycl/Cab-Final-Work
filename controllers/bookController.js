const {passenger, booking, login,pickup} = require('../models/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');


module.exports.getBooking = (req, res, next) => {
    res.render("booking");
  };

  module.exports.getBookingView = (req, res, next) => {
    res.render("bookingView");
  };

  module.exports.getPayement = (req, res, next) => {
    res.render("payment");
  };

  module.exports.createBooking = async (req, res, next) => {
    booking.create({
            from: req.body.from,
            to: req.body.to,
            cabType: req.body.r1,
            mobileNumber: req.body.mobile,
            loginId: req.identity.user.id
        })
        .then(movieFromDb => {
          const pickupPoint=req.body.from;
          const destination=req.body.to;
          console.log(pickupPoint)
          pickup.findOne({
              where: {pickupPoint:pickupPoint,destination:destination}
        })
        .then(amount=>{
          console.log(amount.amount)
          console.log(amount.pickId)
              res.render("payment",{
                  amount:amount.amount,
                  pickId:amount.pickId,
                  pickupPoint : amount.pickupPoint,
                  destination:amount.destination,

              })
          })

})
}

module.exports.getBookingList = async (req, res, next) => {
  booking.findAll({
    where: {
      loginId:req.identity.user.id
    }
  })
  .then(result => {
      res.render('bookingView', {
          data: result,
      });
  });

}

module.exports.UpdateBookingList = async(req, res, next) => {
  booking.findByPk(req.params.id)
      .then(movieFromDb => {
          res.render('bookingUpdate', {
              data: movieFromDb
          });
      });
}

module.exports.updateBooking = async (req, res, next) => {
  // var movie = await movie.findByPk(req.params.id);
  await booking.update(
      {
          from: req.body.from,
          to: req.body.to,
          cabType: req.body.r1,
          mobileNumber: req.body.mobile
      },
      {
          where: {booking_id: req.params.id}
      }
  )
  res.redirect('/passenger/bookinglist');
}

module.exports.delete = async (req, res, next) => {
  let id = req.params.id;
  let movieFromDb = await booking.findByPk(id);
  if (movieFromDb != null) {
      await booking.destroy({
          where: {
            booking_id: id
          }
      });
      res.redirect("/passenger/bookinglist");
  }
}
module.exports.getInvoice = (req, res, next)=>{
  res.render('invoice'),{

  }
}
//invoice

module.exports.getInvoice =(req,res,next)=>{
  pickup.findByPk(req.params.id)

  .then(movieFromDb => {
      res.render('invoice', {
          data: movieFromDb
      });

  });
}

//check rides for driver

module.exports.checkRides=(req,res,next)=>{
booking.findAll({
  where: {
    status:'1'
  }
})
.then(result=>{
  res.render('checkForRides',{
    data:result
  });
});
}

//accept driver
module.exports.acceptOffer = async (req, res, next) => {
  await booking.update(
      {
        status: "2",
        driverDriverId:req.session.userId
      },
      {
          where: {booking_id:req.params.id}
      }
  )
  res.redirect('/driver/myrides');
}

//myRides

module.exports.myRides=(req,res,next)=>{
  booking.findAll({
    where: {
      status:'2',
      driverDriverId:req.session.userId
    }
  })
  .then(result=>{
    res.render('myRides',{
      data:result
    });
  });
}