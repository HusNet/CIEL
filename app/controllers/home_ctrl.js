
exports.index = function(req, res, next) {

    res.render('home/index', {
        title: 'Welcome to CIEL Webapp',
        body: 'Development in progress...'
    });

};