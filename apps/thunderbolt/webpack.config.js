// eslint-disable-next-line node/no-unpublished-require
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (options, webpack) => {
  const lazyImports = ['@nestjs/microservices/microservices-module', '@nestjs/websockets/socket-module'];

  return {
    ...options,
    externals: ['util/types'],
    entry: {
      main: `./src/main.ts`
    },

    resolve: {
      extensions: ['.ts', '.js']
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
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        }
      })
    ]
  };
};
