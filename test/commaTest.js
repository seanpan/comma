var comma = require('../src/comma/comma');
var maps = require('./maps');
var debugData = require('../example/respData.json');

comma.init({
    debug: true,
    maps: maps,
    interfaces: [
        {
            url: 'foourl',
            name: 'foo',
            successFlag: ['success'],
            debugData: debugData
        }
    ]
});

comma.request('foo', null, function (data) {
    console.log(1111, data)
}, function (data) {
    console.log(222, data)

});