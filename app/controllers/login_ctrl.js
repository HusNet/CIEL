
var mongoose = require('mongoose'),
    clients = mongoose.model('clients');

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
    let phone = req.body.phone;
    let session = req.session;
    console.log(phone);

    // check if phone number exists in database
    const query = clients.findOne({phone: phone}).exec();
    query.then(function(client){

        if(client == null){

            res.render('login/error', {

                title: 'Erreur lors de la connexion',
                errorMessage:  'Ce numéro de téléphone n\'existe pas'
            });

        }
        else{
            session.clientId = client._id;
            console.log(client);
            // generate sms code
            let smsCode = Math.floor(Math.random() * Math.floor(5000)) + 1000;
            console.log(smsCode);

            client.code = smsCode;
            client.save(function(err){
                if(err)
                    console.log(err);
            });
            console.log('client updated ...');
            res.redirect('/login/code');

        }

    });

    query.catch(function(err){
       console.log(err);
    });

};

exports.code = function(req, res, next) {
    res.render('login/code', {
        title: 'Autentification avec code SMS',
        body: 'Veuillez entrer le code reçu par SMS'
    });
};

exports.code_do = function(req, res, next) {
    let smsCode = req.body.code;
    let session = req.session;
    let clientId = session.clientId;


    console.log(clientId);

    console.log(req.body.code);

    // verify code
    const query = clients.findOne({_id: clientId}).exec();
    query.then(function(client){

        if(client == null){

            res.render('login/error', {

                title: 'Erreur lors de la connexion',
                errorMessage:  'Ce numéro de téléphone n\'existe pas'
            });

        }
        else{
            console.log(client);
            // generate sms code

            console.log(smsCode);
            if(smsCode === client.code){
                session.logged = true;

                res.redirect('/');
            }
            else{

                res.render('login/error', {

                    title: 'Erreur lors de la connexion',
                    errorMessage:  'Mauvais code !'
                });
            }

        }

    });

    query.catch(function(err){
        console.log(err);
    });

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
