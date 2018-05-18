
exports.index = function(req, res, next) {

    res.render('home/index', {
        title: 'Bienvenue sur la plateforme CIEL',
    });

};

exports.search = function(req, res, next) {

    res.render('search/index', {
        title: 'Recherche',
    });

};

exports.offer = function(req, res, next) {

    res.render('offer/index', {
        title: 'Enregistrer votre offre',
    });

};