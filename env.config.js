let isDev = process.env.IS_DEV ? true : false; // true是dev环境,false是线上环境

const getEnvConf = () => ({
  mode: isDev ? 'development' : 'production',
});

module.exports = {
  global: getEnvConf(),
};
