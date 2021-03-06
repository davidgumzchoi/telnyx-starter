/**
 * @overview Karma configuration.
 *
 * @see {@link http://karma-runner.github.io/1.0/config/configuration-file.html}
 */

const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');

// Pass our webpack config to Karma without plugins specified
const webpackKarmaConfig = Object.assign(webpackConfig, {plugins: [
  // Workaround for https://github.com/angular/angular/issues/11580
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
    __dirname
  ),
]});

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-webpack'),
    ],

    files: [
      { pattern: 'test/spec.bundle.js', watched: false },
    ],
    // Make sure you run your files through `webpack`
    // if you add a new file path.
    preprocessors: {
      'test/spec.bundle.js': ['webpack'],
    },

    webpack: webpackKarmaConfig,

    webpackMiddleware: {
      // Reduce webpack output
      noInfo: true,
      stats: {
        chunks: false,
      },
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['HeadlessChromeNoSecurity'],
    customLaunchers: {
      HeadlessChromeNoSecurity: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-web-security']
      }
    },
    singleRun: true,
    concurrency: Infinity,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 30000,
    captureTimeout: 60000
  });
};
