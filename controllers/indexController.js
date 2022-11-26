//index page

module.exports.index = (req, res, next) => {
    res.render('index', {mishel: 'from page'});
}