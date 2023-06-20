module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: {
          //core-js的版本
          version: 3,
        },
      },
    ],
    [
      '@babel/preset-typescript', // 引用Typescript插件
      {
        allExtensions: true, // 支持所有文件扩展名
      },
    ],
  ],
  plugins: [
    ['lodash'],
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    '@babel/plugin-transform-typescript',
  ],
};
