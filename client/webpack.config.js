const path               = require('path');
const webpack            = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const ImageminPlugin     = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

let conf = {
  entry: {
    index: ['@babel/polyfill', path.join(__dirname, 'src', 'index.js')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    publicPath: '/dist'
  },
  devServer: {
    port: 8081,
    overlay: true,
    historyApiFallback: true,
    publicPath: '/dist',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(c|sa)ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]'
            }
          },
          'img-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: './img'
      }
    ]),
    new ExtractTextPlugin('./css/style.css')
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production ? false/* 'source-map' */ : 'eval-sourcemap';
  if (production) {
    conf.plugins.push(
      new ImageminPlugin({
        test: /\.(png|jpe?g|gif|svg)$/i
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    );
  }
  return conf;
};
