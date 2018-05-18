module.exports = function(app, router) {

    app.use(router);
    app.use(function(req, res) {
        res.status(404).render('404', {
            title: 'Page not found (AKA 404 Error)'
        });
    });


    //home routes
    let home = require('../app/controllers/home_ctrl');
    router.get('/', function(req, res, next) {
        home.index(req, res, next);
    });

    //login form routes
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

    //register form routes
    let register = require('../app/controllers/login_ctrl');
    router.get('/register', function(req, res, next) {
        register.register(req, res, next);
    });

    //search routes
    let search = require('../app/controllers/search_ctrl');
    router.get('/search', function (req, res, next) {
        search.index(req, res, next);
    });
    router.get('/search/categories', function (req, res, next) {
        search.categories(req, res, next);
    });
    router.get('/search/subcategories/:id', function (req, res, next) {
        search.subCategories(req, res, next);
    });
    router.get('/search/map', function (req, res, next) {
        search.maps(req, res, next);
    });

    //offer routes
    let offer = require('../app/controllers/offer_ctrl');
    router.get('/offer', function (req, res, next) {
        offer.index(req, res, next);
    });
};