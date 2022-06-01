
  const { VueLoaderPlugin } = require('vue-loader')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: ['./js/main.js'],
    output: {
        filename: "./build.js"
    },
    mode: 'none'
    
}