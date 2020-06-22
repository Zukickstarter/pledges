const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
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
              presets: ['@babel/preset-env', '@babel/preset-react']
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
  mode: 'development'
}