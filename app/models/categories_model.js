var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    title: String,
    parent: String
});


mongoose.model('categories', CategorySchema);