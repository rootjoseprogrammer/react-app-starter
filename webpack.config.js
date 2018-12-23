const WebPack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64:5]",
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'js/app.js'
  },
  devServer: {
    host: 'localhost',
    disableHostCheck: true,//OPCIONAL IS NOT A SOLUTION
    port: 3000,
    inline:true
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        template: './src/assets/index.html'
      })
  ]
};
