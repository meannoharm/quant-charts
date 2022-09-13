'use strict';

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./dist/quantChart.esm.production.js');
} else {
	module.exports = require('./dist/quantChart.esm.development.js');
}
