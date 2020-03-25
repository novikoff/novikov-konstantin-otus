const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".tsx"]
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|ts)x?$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CleanWebpackPlugin()
    ]
}