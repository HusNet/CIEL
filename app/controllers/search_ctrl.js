let API_KEY = require('../../config/secretConfig');

var mongoose = require('mongoose'),
    categories = mongoose.model('categories'),
    offers = mongoose.model('offers');
var ObjectId = mongoose.Types.ObjectId;

exports.index = function(req, res, next) {

    res.render('search/index', {
        title: 'Recherche',
    });

};

exports.categories = function(req, res, next) {

    let query = categories.find({parent: null}).exec();

    query.then(function (categories) {
        res.render('search/categories', {
            title: 'Catégories',
            categories: categories,
        });
    });

    query.catch(function(err){
        console.log(err);
    });
};

exports.subCategories = function(req, res, next) {

    let id = req.params.id;

    let parent = categories.findOne({_id: ObjectId(id)}).exec();


    parent.then(function (parentCategory){


        let query = categories.find({parent: parentCategory.title}).exec();

        query.then(function (foundCategories) {
            if (foundCategories.length == 0) {


                console.log("searching offers " + parentCategory._id);
/*
                let offers = offers.find({categoryId: parentCategory._id.toString()}).exec();

                console.log(offers);

                offers.then(function (foundOffers) {
*/
                    res.render('search/map', {
                        title: "Map",
                        key: API_KEY,
//                        offers: foundOffers,
                    });

//                });
                offers.catch(function(err){
                    console.log(err);
                });

            }
            else {
                res.render('search/categories', {
                    title: 'Catégories',
                    categories: foundCategories,
                });
            }
        });

        query.catch(function(err){
            console.log(err);
        });
    });

    parent.catch(function(err){
        console.log(err);
    });
};


exports.maps = function(req, res, next) {

    res.render('search/map', {
        title: "Map",
        key: API_KEY,
    });

};


