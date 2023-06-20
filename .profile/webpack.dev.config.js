const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const os = require('os');
const baseConfig = require('./webpack.base.config');
const { resolvePath } = require('./utils/index');
const profile = require('../profile.config');
const config = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: resolvePath(`${profile.outputDir}`),
    publicPath: profile.publicPath,
  },
  devtool: 'eval-source-map',
  devServer: {
    ...profile.devServer,
  },
  cache: {
    type: 'memory',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
        extensions: {
          vue: {
            enabled: true,
            compiler: '@vue/compiler-sfc',
          },
        },
      },
    }),
    new ESLintPlugin({
      fix: true,
      context: resolvePath('src'),
      lintDirtyModulesOnly: true,
      extensions: ['.vue', '.ts', '.tsx', '.js', '.jsx'],
      threads: os.cpus().length,
    }),
  ],
};

module.exports = merge(baseConfig, config);
