module.exports = function(app, router) {

    app.use(router);
    app.use(function(req, res) {
        res.status(404).render('404', {
            title: 'Page not found (AKA 404 Error)'
        });
    });



    //home route
    let home = require('../app/controllers/home_ctrl');
    router.get('/', function(req, res, next) {
        home.index(req, res, next);
    });

    //login form route
    let login = require('../app/controllers/login_ctrl');
    router.get('/login', function(req, res, next) {
        login.login(req, res, next);
    });
    router.post('/login', function(req, res, next) {
       login.login_do(req, res, next);
    });
    router.get('/login/code', function(req, res, next) {
        login.code(req, res, next);
    });
    router.post('/login/code', function(req, res, next) {
        login.code_do(req, res, next);
    });

    //register form route
    let register = require('../app/controllers/login_ctrl');
    router.get('/register', function(req, res, next) {
        register.register(req, res, next);
    });

};