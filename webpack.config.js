module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './app'
  ],

  output: {
    path: __dirname + '/build',
    filename: 'si909.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },

  devServer: {
    contentBase: [ 'static' ]
  }
}
