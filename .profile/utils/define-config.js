const { resolvePath } = require('./path');
const defaultConfig = {
  publicPath: '/', //开发或生产环境服务的公共基础路径
  outputDir: 'dist', //生成的生产环境构建文件的目录
  resolve: {
    alias: {
      '@': resolvePath('src'),
    },
    extensions: [
      '.ts',
      '.tsx',
      '.jsx',
      '.json',
      '.js',
      '.vue',
      '.sass',
      '.scss',
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
  },
  env: {},
  lessOptions: {},
  sassOptions: {},
};
/**
 * @param config  {Object} 配置对象config
 * @param config.publicPath {String}  部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
 * @param config.outputDir {String} 生成的生产环境构建文件的目录
 * @param config.resolve {Object} webpack resolve配置
 * @param config.resolve.alias {Object} 使用文件系统路径的别名
 * @param config.resolve.extensions {Array} 导入时想要省略的扩展名列表
 * @param config.devServer {Object}  所有 webpack-dev-server 的选项都支持
 * @param config.lessOptions {Object} 同less-loader的lessOptions配置一样
 * @param config.sassOptions {Object} sass-loader的配置
 * @param config.env {Object} env的配置
 */
const defineConfig = config => {
  return Object.assign(defaultConfig, config);
};

module.exports = { defineConfig };
