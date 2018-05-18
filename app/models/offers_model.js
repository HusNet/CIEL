var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfferSchema = new Schema({
    client: String,
    categoryId : String,
    image: [
        String
    ],
    title: String,
    address: String,
    availability: {
        type: String,
        remarks : String
    },
    price : String
});


mongoose.model('offers', OfferSchema);