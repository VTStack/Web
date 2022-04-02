// eslint-disable-next-line node/no-unpublished-require
const TerserPlugin = require('terser-webpack-plugin');
const { resolve } = require('path');
const { cwd } = require('process');

module.exports = (options, webpack) => {
  const lazyImports = ['@nestjs/microservices/microservices-module', '@nestjs/websockets/socket-module'];

  return {
    externals: ['util/types'],

    mode: 'production',
    ...options,
    // entry: { main: resolve(cwd(), './src/main.ts') },

    // output: {
    //   filename: 'main.js',
    //   path: resolve(cwd() + '/../../dist/apps/thunderbolt')
    // },

    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.findIndex(resource) !== -1) {
            try {
              require.resolve(resource);
            } catch (err) {
              console.log(err);
              return true;
            }
          }
          return false;
        }
      })
    ]
  };
};
