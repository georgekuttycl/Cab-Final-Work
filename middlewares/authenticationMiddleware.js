const login = require('../models/models').login;
const pickup = require('../models/models').pickup;

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }

    let userId = req.session.userId;
    if(userId){
        let userFromDb = await login.findByPk(userId);
        if(userFromDb == null){
            return res.redirect("/");
        }
        req.identity.isAuthenticated = true;
        req.identity.user = {
            id: userFromDb.dataValues.id,
            firstname: userFromDb.dataValues.firstname,
            lastname: userFromDb.dataValues.lastname,
            email: userFromDb.dataValues.email,
            chooseRole: userFromDb.dataValues.role,

        }

        if(userFromDb.dataValues.role == "passenger"){
            req.identity.isPassenger = true;
        }

        else if(userFromDb.dataValues.role == "driver"){
            req.identity.isDriver = true;
        }
        else {
            req.identity.isAdmin = true;
        }

    }

    if(req.url == "/" || req.url == "/login"){
        return next();
    }

    if(!userId || userId == null){
        return res.redirect("/");
    }


    next();
}