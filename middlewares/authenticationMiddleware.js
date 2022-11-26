const login = require('../models/login');

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
            firstname: userFromDb.dataValues.firstName,
            lastname: userFromDb.dataValues.lastName,
            email: userFromDb.dataValues.email,
            chooseRole: userFromDb.dataValues.role
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