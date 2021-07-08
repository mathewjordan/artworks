const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './src'),
    watchContentBase: true,
    hot: true,
  },
  devtool: 'eval-source-map',
};
