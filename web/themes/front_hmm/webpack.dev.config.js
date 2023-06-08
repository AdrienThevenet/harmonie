const webpack = require("webpack");

// Default conf is for Dev
const webpackConfig = require('./webpack.common');

webpackConfig.mode = "development";
webpackConfig.devtool = "source-map";
webpackConfig.optimization = {
  minimize: false
};

webpackConfig.plugins.push(
  new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
    publicPath: "/themes/front_hmm/dist/"
  })
);

module.exports = webpackConfig;
