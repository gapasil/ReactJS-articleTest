const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const sass = require('sass');

sass.render({
  silenceDeprecations: ['legacy-js-api', 'import'],
}, function(err, result) {
  // ...
});

module.exports = {
  devtool: 'inline-source-map',
  stats: 'errors-warnings',

  mode: 'none',

  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },

  target: 'web',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  quietDeps: true,  // Отключает предупреждения для зависимостей
                  silent: true,
                  api: 'modern', // or "modern"
                  silenceDeprecations: ["legacy-js-api", 'import'],

                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],  // Преобразует SVG в компонент React
        },        
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource', // Используйте встроенный функционал Webpack вместо `file-loader`
        },        
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          loader: 'babel-loader',
          options:{
              presets: ['@babel/preset-env'],
              cacheDirectory: true, 
          }
        }
      ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
      }),
      new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
  }
};