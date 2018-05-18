
exports.index = function(req, res, next) {

    res.render('offer/index', {
        title: 'Enregistrer votre offre',
    });

};