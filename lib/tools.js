/**
 * Created by yanghc on 2017/09/01.
 */

var tools = {
    /**
     * 格式化阿里云 全国省市县行政区划 数据
     * @param data 全部数据
     * @param parentId 父级地区ID
     * @returns {Array}
     */
    formatAreaData: function (data, parentId) { //51 ,0
        var options = [];
        for (var key in data) {
            if(parentId === '0' && data[key].id === '51' )
                continue;
            if (data[key].parentid === parentId) {
                var option = {};
                option.value = data[key].id;
                option.label = data[key].name;
                option.parentid = data[key].parentid;
                option.parentname = data[key].parentname;
                option.areacode = data[key].areacode;
                option.zipcode = data[key].zipcode;
                option.depth = data[key].depth;
                var children = this.formatAreaData(data, data[key].id);
                if (children.length > 0) {
                    option.children = children;
                }
                options.push(option);
            }
        }
        return options;
    },
    /**
     * 获取 省-市 数据
     * @param data
     * @returns {Array}
     */
    getProvinceCity: function (data) {
        return this.formatAreaData(data, '0');
    },
    /**
     * 获取 国家-省-市 数据
     * @param data
     * @returns {Array}
     */
    getCountryProvinceCity: function (data) {
        var options = [];
        var option = {};
        option.value = '9999';
        option.label = '中国';
        option.parentid = '0';
        option.parentname = '';
        option.areacode = '0086';
        option.zipcode = '';
        option.depth = '2';
        option.children = this.formatAreaData(data, '0');
        options.push(option);
        return options;
    },
    /**
     * 获取 省 数据
     * @param data
     * @returns {Array}
     */
    getProvince: function (data) {
        return this.formatAreaData(data, '0');
    },
    /**
     * 获取 省-市-县 数据
     * @param data
     * @returns {Array}
     */
    getProvincesAndCities: function (data) {
        return this.formatAreaData(data, '0');
    },
    /**
     * 获取 国家 数据
     * @param data
     * @returns {Array}
     */
    getCountry: function (data) {
        var options = this.formatAreaData(data, '51');
        var option = {};
        option.value = '9999';
        option.label = '中国';
        option.parentid = '0';
        option.parentname = '';
        option.areacode = '0086';
        option.zipcode = '';
        option.depth = '2';
        options.unshift(option);
        return options;
    },

    /**
     * 获取 国家-省 数据
     * @param data
     * @returns {Array}
     */
    getCountryProvince: function (data) {
        var options = [];
        var option = {};
        option.value = '9999';
        option.label = '中国';
        option.parentid = '0';
        option.parentname = '';
        option.areacode = '0086';
        option.zipcode = '';
        option.depth = '2';
        option.children = this.formatAreaData(data, '0');
        options.push(option);
        return options;
    }
}


module.exports = tools;
