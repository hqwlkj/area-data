/* eslint comma-dangle:0 */
/**
 * data for ListView.IndexedList
 */
var tools = require('./tools');
var _data = require('./data');
var data = tools.getCountryProvince(_data);


data.sort(function (a, b) {
  return parseInt(a.id) - parseInt(b.id);
});
// console.log(data);

module.exports = data;
