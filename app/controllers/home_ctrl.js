
exports.index = function(req, res, next) {

    res.render('home/index', {
        title: 'Bienvenue sur la plateforme CIEL',
    });

};
