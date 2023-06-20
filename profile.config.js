const { defineConfig, resolvePath } = require('./.profile/utils/index');
const envConfig = require('./env.config');
const isDevelopment = process.env.NODE_ENV === 'development';
module.exports = defineConfig({
  publicPath: isDevelopment ? '/' : './', //开发或生产环境服务的公共基础路径
  outputDir: resolvePath('dist'), //生成的生产环境构建文件的目录
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': resolvePath('src'),
    },
    extensions: [
      '.ts',
      '.tsx',
      '.json',
      '.js',
      '.vue',
      '.sass',
      '.scss',
      '.less',
    ],
  },
  env: {
    ...envConfig.global,
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  //less-laoder配置
  less: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  //sass-loader配置
  sass: {},
});
