const { config } = require('./output');

module.exports = config({ type: 'commonjs', environments: ['node', 'browser'] });
