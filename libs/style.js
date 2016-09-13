const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

exports.setup = function (include) {
  return {
    module: {
      loaders: [
        {
          test: /\.s?(a|c)ss$/,
          loaders: ['style', 'css', 'sass'],
          include,
        },
      ],
    },
  };
};

exports.extract = function (include) {
  return {
    module: {
      loaders: [
        // Extract CSS during build
        {
          test: /\.s?(a|c)ss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          include,
        },
      ],
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css'),
    ],
  };
};

exports.purify = function (paths) {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        // 'paths' is used to point PurifyCSS to files not
        // visible to Webpack. You can pass glob patterns
        // to it.
        paths,
      }),
    ],
  };
};

exports.lint = function (context) {
  return {
    plugins: [
      new StyleLintPlugin({
        configFile: '.stylelintrc.json',
        files: ['**/*.scss'],
        syntax: 'scss',
        context,
      }),
    ],
  };
};
