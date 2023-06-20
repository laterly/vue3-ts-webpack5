const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = process.env.NODE_ENV;
const commonCssLoader = [
  env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader',
];

module.exports = { commonCssLoader };
