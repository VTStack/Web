const { resolve } = require('path');
module.exports = options => ({
  ...options,
  mode: 'production',
  target: 'node',
  externals: [...options.externals, '_http_common'],
  output: {
    path: resolve(__dirname + '/dist')
  },
  optimization: {
    minimize: true
  }
});
