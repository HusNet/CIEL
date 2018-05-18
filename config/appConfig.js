let path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

let db_dev = 'mongodb://localhost/dbciel';
let db_prod = 'mongodb://localhost/dbciel_prod';

let config = {
    development: {
        root: rootPath,
        app: {
            name: 'CIEL-webapp-dev'
        },
        port: 3000,
        db: db_dev
    },

    test: {
        root: rootPath,
        app: {
            name: 'CIEL-webapp-tests'
        },
        port: 3000,
        db: db_dev
    },

    production: {
        root: rootPath,
        app: {
            name: 'CIEL-webapp'
        },
        port: 3000,
        db: db_prod
    }
};

module.exports = config[env];