
exports.index = function(req, res, next) {

    res.render('login/index', {
        title: 'Connexion à la plateforme CIEL',
        body: 'Merci de vous connecter ou de vous enregistrer pour continuer'
    });

};

exports.login = function(req, res, next) {

    res.render('login/login', {
        title: 'Connexion à la plateforme CIEL',
        body: 'Veuillez entrer votre numéro de téléphone'
    });

};

exports.register = function(req, res, next) {

    res.render('login/register', {
        title: 'Enregistrement sur la plateforme CIEL',
        body: 'Merci d\'entrer vos informations'
    });

};
