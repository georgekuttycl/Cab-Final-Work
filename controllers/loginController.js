const db = require('../models/login');

//get login form
module.exports.login = (req, res, next) => {
    res.render('cab-login');
}

module.exports.loginPost = (req, res, next) => {
    res.render('cab-login');
}
//index page

module.exports.index = (req, res, next) => {
    res.render('cab-index');
}


//enter signup details to the db
module.exports.signup = (req, res, next) => {
    db.create({
        email: req.body.email,
        mobileNumber: req.body.mobile,
        role:req.body.chooseRole,
        password: req.body.password,
        })
        .then(user => {
            res.redirect("/");
        })
}

//login code

module.exports.loginPost = async (req, res, next)=>{
    const email = req.body.loginemail;
    const password = req.body.loginpassword;
    const userFromDb = await db.findOne({
        where: {email:email, password: password}
    });

    if(userFromDb == null){
        res.render('cab-login', {message: 'No user with this email or password was found.'})
    }

    res.render('cab-index');
}




