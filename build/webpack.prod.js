const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './src'),
    historyApiFallback: true,
    watchContentBase: true,
    hot: true,
  },
  devtool: 'eval-source-map',
};
