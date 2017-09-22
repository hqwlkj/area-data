(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', './country', './province', './district', './county'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('./country'), require('./province'), require('./district'), require('./county'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.country, global.province, global.district, global.county);
        global.index = mod.exports;
    }
})(this, function (module, country, province, countryProvinceCity, county) {
    'use strict';

    module.exports = function (type) {
        var data = [];
        switch (type) {
            case 'country':
                data = country;
                break;
            case 'country-province':
                data = province;
                break;
            case 'country-province-city':
                data = countryProvinceCity;
                break;
            case 'province-city':
                data = county;
                break;
            default:
                data = county;
                break;
        }
        return data;
    };
});