// const db = require("../models/login");
const db = require('../models/models').login;

//get login form
module.exports.login = (req, res, next) => {
  res.render("login", { regError: false });
};

module.exports.getAdmin = (req, res, next) => {
	res.render("adminIndex", { regError: false });
  };

module.exports. loginPost = async (req, res, next) => {
//   res.render("login");

  if (req.body.type == "signup") {
    //enter signup details to the db

      db.create({
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        mobileNumber: req.body.mobile,
        role: req.body.chooseRole,
        password: req.body.password,
      }).then((user) => {
        res.redirect("/");
      });
  	}
	else {
		const email = req.body.loginemail;
		const role = req.body.loginchooseRole;
		const password = req.body.loginpassword;
		console.log(req.body);
		const userFromDb = await db.findOne({
			where: { email: email, password: password },
		});
		console.log(userFromDb);
		if (userFromDb == null) {
			return res.render("login", {
				message: "No user with this email or password was found.",
			});
		}
		req.session.userId = userFromDb.id;
		console.log('USER SESSION SET')
		if (userFromDb.dataValues.role == "passenger") {
			return res.redirect("/");
		} else if (userFromDb.dataValues.role == "driver") {
			return res.redirect("/");
		} else {
			return res.redirect("/admin/home");
		}
		res.redirect("/");
  	}
};

module.exports.logout = (req,res,next)=>{
	req.session = null;
    res.redirect("/");

}
