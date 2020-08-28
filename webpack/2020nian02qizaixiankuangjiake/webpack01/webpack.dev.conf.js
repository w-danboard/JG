const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'dev.js',
    path: path.resolve(__dirname, 'dev')
  }
}