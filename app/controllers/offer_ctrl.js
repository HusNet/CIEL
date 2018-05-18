
exports.index = function(req, res, next) {

    res.render('offer/index', {
        title: 'Enregistrer votre offre',
    });

};


exports.category = function(req, res, next) {

    res.render('offer/category', {
        title: 'Choisir une categorie',
    });

};

exports.picture = function(req, res, next) {

    res.render('offer/picture', {
        title: 'Choisir une image',
    });

};

exports.title = function(req, res, next) {

    res.render('offer/title', {
        title: 'Entrer un titre',
    });

};

exports.availability = function(req, res, next) {

    res.render('offer/availability', {
        title: 'Entrer les disponibilité',
    });

};

exports.place = function(req, res, next) {

    res.render('offer/place', {
        title: 'Choisissez le lieu',
    });

};

exports.price = function(req, res, next) {

    res.render('offer/price', {
        title: 'Entrez le prix',
    });

};


exports.finish = function(req, res, next) {

    res.render('offer/finish', {
        title: 'Offre ajoutée',
        body: 'Offre crée, vous pouvez retourner à la page d\'accueil on compléter l\'offre'
    });

};