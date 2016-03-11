var _ = require("lodash")

var heroin = require('heroin-js');

var test = {
    name: 'audun-book-inventory-test',
    config_vars: {
        NODE_ENV: "test",
    }
}


var config = _.merge({}, require('./base'), test);
var configurator = heroin(process.env.HEROKU_API_TOKEN);
configurator(config);
