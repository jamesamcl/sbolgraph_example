const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],

    // Request (a dependency of sbolgraph) is a huge module and pulls in
    // all kinds of other dependencies. substitute it for browser-request.
    // TODO: change sbolgraph to use fetch
    alias: {
      request: 'browser-request',
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist"
  }
};

