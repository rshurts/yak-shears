exports.load = function (include) {
  return {
    module: {
      loaders: [
        {
          // Inline small woff files and output them below fonts/.
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url',
          query: {
            name: 'fonts/[name].[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff',
          },
          include,
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file',
          query: {
            name: 'fonts/[name].[hash].[ext]',
          },
          include,
        },
      ],
    },
  };
};
