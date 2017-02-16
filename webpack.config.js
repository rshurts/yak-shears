/* eslint-disable comma-dangle */

const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const build = require('./libs/build');
const javascript = require('./libs/javascript');
const style = require('./libs/style');
const fonts = require('./libs/fonts');
const images = require('./libs/images');
const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;

// Set the babel environment so react-hrme can be used in the .babelrc
process.env.BABEL_ENV = TARGET;

const TITLE = 'Yak Shears';

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  favicon: path.join(__dirname, 'app', 'assets', 'favicon', 'favicon.ico'),
  fonts: [
    path.join(__dirname, 'node_modules', 'font-awesome', 'fonts'),
    path.join(__dirname, 'app', 'assets', 'fonts'),
  ],
  images: path.join(__dirname, 'app', 'assets', 'images'),
  style: [
    path.join(__dirname, 'node_modules', 'font-awesome', 'css', 'font-awesome.css'),
    path.join(__dirname, 'node_modules', 'bulma', 'bulma.sass'),
    path.join(__dirname, 'app', 'style', 'main.scss'),
  ],
  test: path.join(__dirname, 'tests'),
};

const common = merge(
  {
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    entry: {
      hot: 'react-hot-loader/patch',
      app: PATHS.app,
      style: PATHS.style,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    // Important: Do not remove ''. If you do, imports
    // without an extension won't work.
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  },
  build.indexTemplate({
    appMountId: 'root',
    favicon: PATHS.favicon,
    title: TITLE,
  }),
  fonts.load(PATHS.fonts),
  images.load(PATHS.images),
  javascript.load(PATHS.app)
);

let config;

// Detect how npm is run and branch based on that.
switch (TARGET) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without this but this is useful to set.
          chunkFilename: '[chunkhash].js',
        },
      },
      build.clean(PATHS.build),
      build.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      build.extractBundle({
        name: 'vendor',
        entries: Object.keys(pkg.dependencies),
      }),
      build.minify(),
      style.extract(PATHS.style),
      style.purify([PATHS.app])
    );
    break;
  default:
    config = merge(
      common,
      style.lint(PATHS.app),
      javascript.lint(PATHS.app),
      build.devServer({
        // Customise host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT,
      }),
      {
        devtool: 'eval-source-map',
      },
      style.setup(PATHS.style),
      javascript.enableReactPerformanceTools()
    );
}

module.exports = validate(config, {
  quiet: true,
});
