const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                "babel-plugin-styled-components",
                "@babel/plugin-transform-runtime",
              ]
            }
          },
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.jsx', '.js', '.css'
    ]
  },
};
