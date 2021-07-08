const path = require('path');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    concatenateModules: false,
  },
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
