exports.load = function (include) {
  return {
    module: {
      loaders: [
        {
          // Inline small images.
          test: /\.(jpg|png)$/,
          loader: 'url',
          query: {
            name: 'images/[name].[hash].[ext]',
            limit: 15000,
          },
          include,
        },
        {
          test: /\.svg$/,
          loader: 'file',
          query: {
            name: 'images/[name].[hash].[ext]',
          },
          include,
        },
      ],
    },
  };
};
