const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const config = require('./config/appConfig');

mongoose.connect(config.db);
let db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at: ' + config.db);
});

let modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});

let app = express();
let router = express.Router();

require('./config/express')(app, config);
require('./config/routes')(app, router);

app.listen(config.port);
