var country = require('./country');
var province = require('./province');
var countryProvinceCity = require('./district');
var county = require('./county');

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
}