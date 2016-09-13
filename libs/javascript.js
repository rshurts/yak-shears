exports.load = function (include) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          // Enable caching for extra performance
          loaders: ['babel?cacheDirectory'],
          include,
        },
      ],
    },
  };
};

exports.lint = function (include) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include,
        },
      ],
    },
  };
};

exports.enableReactPerformanceTools = function () {
  return {
    module: {
      loaders: [
        {
          test: require.resolve('react'),
          loader: 'expose?React',
        },
      ],
    },
  };
};
