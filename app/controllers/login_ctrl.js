
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

exports.login_do = function(req, res, next) {
    console.log(req.body.phone);
    
    // check if phone number exists in database

    // generate sms code

    // save sms code in db

    // send code by sms to phone number

    // redirect to code page

    res.redirect('/login/code');
};

exports.code = function(req, res, next) {
    res.render('login/code', {
        title: 'Autentification avec code SMS',
        body: 'Veuillez entrer le code reçu par SMS'
    });
};

exports.code_do = function(req, res, next) {
    console.log(req.body.code);

    // verify code

    // start session

    // signed in

    // redirect to home
};

exports.register = function(req, res, next) {

    res.render('login/register', {
        title: 'Enregistrement sur la plateforme CIEL',
        body: 'Merci d\'entrer vos informations'
    });

};
