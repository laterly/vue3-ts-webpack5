const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpackbar = require('webpackbar');
const { commonCssLoader, resolvePath } = require('./utils/index');
const profile = require('../profile.config');
const env = process.env.NODE_ENV;
module.exports = {
  entry: {
    app: resolvePath('src/main.ts'),
  },
  target: 'web',
  resolve: profile.resolve || {},
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: env === 'development',
          extractCSS: env !== 'development',
          loaders: {
            sass: [
              ...commonCssLoader,
              {
                loader: 'sass-loader',
              },
            ],
            scss: [
              ...commonCssLoader,
              {
                loader: 'sass-loader',
              },
            ],
            less: [
              ...commonCssLoader,
              {
                loader: 'less-loader',
              },
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        include: resolvePath('src'),
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        oneOf: [
          {
            test: /\.s[ca]ss$/,
            use: [
              ...commonCssLoader,
              {
                loader: 'sass-loader',
                options: profile.sass || {},
              },
            ],
          },
          {
            test: /\.less$/i,
            use: [
              ...commonCssLoader,
              {
                loader: 'less-loader',
                options: profile.less,
              },
            ],
          },
          {
            test: /\.css$/,
            use: [...commonCssLoader],
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: /node_modules/,
            options: {
              minimize: false,
            },
          },
          {
            test: /\.json$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(png|jpeg|jpg|gif|webm|svg)$/,
            type: 'asset',
            exclude: /node_modules/,
            include: resolvePath('src'),
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename:
                env == 'development'
                  ? `images/[name].[ext]`
                  : `images/[name][contenthash:8].[ext]`,
            },
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aa)$/,
            type: 'asset',
            exclude: /node_modules/,
            include: resolvePath('src'),
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename:
                env == 'development'
                  ? `media/[name].[ext]`
                  : `media/[name][contenthash:8].[ext]`,
            },
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            type: 'asset',
            exclude: /node_modules/,
            include: resolvePath('src'),
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename:
                env == 'development'
                  ? `fonts/[name].[ext]`
                  : `fonts/[name][contenthash:8].[ext]`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false
    }),
    new Webpackbar({
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(profile.env),
    }),
    // 忽略 dayjs 下的 /locale 目录
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /dayjs$/,
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolvePath('public/index.html'),
      inject: true,
      minify: true,
    }),
  ],
};
