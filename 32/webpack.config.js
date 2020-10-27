const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
 devServer: {
  contentBase: path.join(__dirname, 'dist'),
  port: 9000,
 },
 mode: 'development',
 entry: ["./src/index.js"],
 module: {
  rules: [
   {
    test: /\.scss$/,
    exclude: /\.module\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            compileType: 'icss'
          }
        }
      },
      {
        loader: 'sass-loader'
      },
    ],
  },
  ],
 },
 output: {
  filename: "[name].js",
  path: path.resolve(__dirname, "dist"),
  publicPath: ""
 },
 plugins: [new HtmlWebpackPlugin({
  template: 'src/index.html',
 })]
};