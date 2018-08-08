const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js',
    './src/assets/index.js'
  ],
  output: {
    filename: '[hash].js',
    path: `${__dirname}/public`,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    port: 8080,
    publicPath: '/'
  }
}
