var _ = require('lodash');
var Ajax = require('simple-ajax');
var parser = require('./parser/parser');

module.exports = {
    debug: false,
    init: function (config) {
        var maps = config.maps;
        var Interfaces = {};
        _.each(config.interfaces, function (itf) {
            Interfaces[itf.name] = {
                map: maps[itf.name] || {},
                url: itf.url || '',
                successFlag: itf.successFlag || [],
                debugData: itf.debugData || {}
            };
        });
        this.debug = !!config.debug;
        this.Interfaces = Interfaces;
    },
    throwError: function () {

    },
    request: function (name, data, callback, failCallback, method, dataType, cache) {
        var self = this;
        var itf = this.Interfaces[name];
        if (this.debug) {
            typeof callback === 'function' && self.parse(itf.debugData || {}, itf.map, callback);
            return;
        }
        var ajax = new Ajax({
            url: itf.url,
            method: method || 'POST',
            cache: cache || true,
            data: data,
            dataType: dataType || 'JSON',
            contentType: dataType || 'JSON'
        });

        ajax.on('success', function (event, res) {
            typeof callback === 'function' && self.parse(res, itf.map, callback);
        });

        ajax.on('error', function (event, res) {
            if (typeof failCallback === 'function') {
                failCallback(res);
                return;
            }
            self.throwError();
        });

        ajax.send();
    },
    get: function () {

    },
    post: function () {

    },
    parse: function () {
        parser.parse.apply(this, arguments);
    },
    Interfaces: {}
};