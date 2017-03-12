const path = require('path')

module.exports = {
  entry: ['./src/index.js'],

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'vue-store.min.js',
    library: 'StoreLite',
    libraryTarget: 'umd'
  },

  plugins: [

  ],

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
