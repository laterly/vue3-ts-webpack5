const { commonCssLoader } = require('./loader');
const { resolvePath } = require('./path');
const { defineConfig } = require('./define-config');
const { clearConsole } = require('./clearConsole');
const { getPort } = require('./getPort');
const { printInstructions } = require('./printInstructions');
module.exports = {
  commonCssLoader,
  resolvePath,
  defineConfig,
  clearConsole,
  getPort,
  printInstructions,
};
