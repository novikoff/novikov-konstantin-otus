const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./index.tsx",
    devtool: "source-map",
    devServer:{
        historyApiFallback:true
    },
    resolve: {
        extensions: [".js", ".tsx",".ts"]
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|ts)x?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
           
        },
        {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "less-loader"
            ]
        },
        {
            test: /\.(css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
          },
          {
            test: /\.(png|jpe?g|svg)$/,
            loader: 'file-loader',
            options: {
                limit: 100000,
                name: 'data/[name].[ext]',
                
            }
        
        }, 
        {
            test: /\.(eot|ttf|woff|woff2|otf)$/,
            use: [
                {
                  loader: 'file-loader',
                  options: {
                        outputPath: 'fonts',
                    }
                }
              ]
          }
        ], 
        
       
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CopyPlugin([
          //  { from: path.resolve(__dirname, 'src/data'), to: path.resolve(__dirname, 'dist') },
            { from: path.resolve(__dirname, 'src/components/City/images'), to: path.resolve(__dirname, 'dist/images') },
          ]),
    ]
}