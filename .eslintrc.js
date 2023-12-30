const { config } = require('./output/eslint-config/config');

module.exports = config({ type: 'commonjs', environments: ['node', 'browser'] });
