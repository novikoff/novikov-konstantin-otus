const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const polyfills = [
  {
    from: path.resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: 'vendor',
    flatten: true
  },
  {
    from: path.resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
    to: 'vendor/bundles',
    flatten: true
  },
  {
    from: path.resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true
  }
];
module.exports = {
    context:path.resolve(__dirname,'src'),
    mode : 'development',
    entry : {
        main: ['@babel/polyfill','./index.js']
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    },
    resolve:{
        extensions:['.js','.json'],
        alias:{
            '@' :   path.resolve(__dirname,'src'),
            '@components' :   path.resolve(__dirname,'components'),
        }
    },
    devServer:{
        port:4200
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([...polyfills], {
            ignore: ['.DS_Store']
          })
    ],
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: {
                    loader:"babel-loader",
                    options:{
                        plugins: ['@babel/plugin-syntax-dynamic-import'],
                        presets: [
                            [
                              '@babel/preset-env',
                              {
                                useBuiltIns: 'usage',
                                targets: '>1%, not dead, not ie 11'
                              }
                            ]
                          ]
                    }
                }
            }
        ]
      }
}