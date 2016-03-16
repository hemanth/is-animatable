'use strict';
const animatableCssProperties = require('animatable-css-properties');
const stripVendorPrefix = require('strip-vendor-prefix');

module.exports = function (cssProperty) {
    console.log(typeof cssProperty);
    if (typeof cssProperty !== 'string') {
        throw new TypeError('Expected a string');
    }

    return animatableCssProperties.filter((property) => stripVendorPrefix(cssProperty) === property).length > 0;
};
