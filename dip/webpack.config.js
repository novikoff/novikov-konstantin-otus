const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.tsx",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.(png|jpe?g|svg)$/,
      //   loader: "file-loader",
      //   options: {
      //     limit: 100000,
      //     name: "data/[name].[ext]",
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new PrettierPlugin({
      printWidth: 80, // Specify the length of line that the printer will wrap on.
      tabWidth: 2, // Specify the number of spaces per indentation-level.
      useTabs: false, // Indent lines with tabs instead of spaces.
      semi: true, // Print semicolons at the ends of statements.
      encoding: "utf-8", // Which encoding scheme to use on files
      extensions: [".js", ".ts", ".tsx", ".less",".scss", ".css"], // Which file extensions to process
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyPlugin([
      //  { from: path.resolve(__dirname, 'src/data'), to: path.resolve(__dirname, 'dist') },
      // {
      //   from: path.resolve(__dirname, "src/components/App/images"),
      //   //from: "components/**/*",
      //   to: path.resolve(__dirname, "dist/images"),
      // },
      {
        from: path.resolve(__dirname, "src/assets/"),
        //from: "components/**/*",
        to: path.resolve(__dirname, "dist/assets/"),
      },
    ]),
  ],
};
