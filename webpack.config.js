module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    port: 8080
  }
}
