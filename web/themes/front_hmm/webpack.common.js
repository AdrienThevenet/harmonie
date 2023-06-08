const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');


module.exports = {
  stats: 'normal',
  entry: {
    "css/style": 'scss/style.scss',
    "js/script.min": "js/script.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "/themes/front_hmm/dist/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer"]
                ]
              }
            }
          },
          'resolve-url-loader',
          {loader: 'sass-loader', options: { sourceMap: true}},
          'webpack-import-glob-loader'
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        // exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.json",
            appendTsSuffixTo: [/\.vue$/]
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  externals: {
    jquery: 'jQuery',
  },
  resolve: {
    extensions: ['\*', '.js', '.jsx'],
    symlinks: false,
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};
