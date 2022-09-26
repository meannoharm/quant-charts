'use strict';

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./dist/quant-charts.esm.production.js');
} else {
	module.exports = require('./dist/quant-charts.esm.development.js');
}
