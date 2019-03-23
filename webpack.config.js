var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('vue-html-webpack-plugin');


module.exports = (env, options) => {

  require('dotenv').config({ path: path.join(__dirname, `config/env.${options.mode}`) });

  const config = {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
              // the "scss" and "sass" values for the lang attribute to the right configs here.
              // other preprocessors should work out of the box, no loader config like this necessary.
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            }
            // other vue-loader options go here
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    devServer: {
      historyApiFallback: true,
      // noInfo: true
      port: 8080,
    },
    performance: {
      hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        vue: true
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
    ]
  }

  if (options.mode === 'production') {
    config.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    config.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      // new webpack.optimize.UglifyJsPlugin({
      //   sourceMap: true,
      //   compress: {
      //     warnings: false
      //   }
      // }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
  }
  return config;
}