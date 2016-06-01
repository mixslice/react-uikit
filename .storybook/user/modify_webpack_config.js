module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  config.resolve = {
    alias: {},
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  }
};
