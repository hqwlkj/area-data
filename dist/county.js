(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './tools', './data'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./tools'), require('./data'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.tools, global.data);
    global.county = mod.exports;
  }
})(this, function (module, tools, _data) {
  'use strict';

  module.exports = tools.getProvincesAndCities(_data);
});