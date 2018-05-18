var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
    firstname: String,
    lastname: String,
    phone: String,
    code: Number,
    defaultAddress: Number,
    addresses: [
        {
            name: String,
            street: String,
            npa: String,
            city: String
        }
    ]
});


mongoose.model('clients', ClientSchema);