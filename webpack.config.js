const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
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
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'wjScrollBlock',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};