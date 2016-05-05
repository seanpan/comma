var jsonMapper = require('json-mapper-json');

module.exports = {
    parse: function (res, map, callback) {
        jsonMapper(res, map).then(function (result) {
            callback(result);
        });
    }
};