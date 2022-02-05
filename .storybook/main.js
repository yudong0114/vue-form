const path = require('path');
const vueCliWebpack = require('../node_modules/@vue/cli-service/webpack.config.js');

module.exports = {
  stories: ['../src/**/**/*.stories.mdx', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue',
  // scss使用のための設定
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return { ...config, module: { ...config.module, rules: vueCliWebpack.module.rules } };
  },
};
