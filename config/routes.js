module.exports = function(app, router) {

    app.use(router);
    app.use(function(req, res) {
        res.status(404).render('404', {
            title: 'Page not found (AKA 404 Error)'
        });
    });

    //login route
    let login = require('../app/controllers/login_ctrl');
    router.get('/', function(req, res, next) {
        login.index(req, res, next);
    });

    //login form route
    router.get('/login', function(req, res, next) {
        login.login(req, res, next);
    });

    //register form route
    router.get('/register', function(req, res, next) {
        login.register(req, res, next);
    });


    //home route
    let home = require('../app/controllers/home_ctrl');
    router.get('/home', function(req, res, next) {
        home.index(req, res, next);
    });

};