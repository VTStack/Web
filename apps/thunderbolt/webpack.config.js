const { resolve } = require('path');
module.exports = (options) => ({
  ...options,
  mode: 'production',
  output: {
    path: resolve(__dirname + '/dist'),
  },
  optimization: {
    minimize: true,
  },
});
