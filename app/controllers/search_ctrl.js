exports.index = function(req, res, next) {

    res.render('search/index', {
        title: 'Recherche',
    });

};

exports.categories = function(req, res, next) {

    res.render('search/categories', {
        title: 'Catégories',
    });

};

exports.maps = function(req, res, next) {

    res.render('search/map', {

    });

};


