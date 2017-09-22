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
    global.province = mod.exports;
  }
})(this, function (module, tools, _data) {
  'use strict';

  /* eslint comma-dangle:0 */
  /**
   * data for ListView.IndexedList
   */
  var data = tools.getCountryProvince(_data);

  data.sort(function (a, b) {
    return parseInt(a.id) - parseInt(b.id);
  });
  // console.log(data);

  module.exports = data;
});