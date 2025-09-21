const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 1. Entry point (main JS file)
  entry: "./src/index.js",

  // 2. Output bundle
  output: {
    filename: "[name].[contenthash].js",   // hashed for caching
    path: path.resolve(__dirname, "dist"),
    clean: true, // removes old builds
  },

  // 3. Set production mode for optimizations
  mode: "production",

  // 4. Resolve extensions
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },

  // 5. Optimization settings
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),          // Minify JS
      new CssMinimizerPlugin(),    // Minify CSS
    ],
    splitChunks: {
      chunks: "all",               // Code splitting
    },
  },

  // 6. Loaders (to handle CSS, images, etc.)
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Extract & bundle CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset", // Automatically inline small images
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile JS (optional)
        },
      },
    ],
  },

  // 7. Plugins
  plugins: [
    new CleanWebpackPlugin(), // Cleans dist/ before building
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // hashed CSS
    }),
  ],
};
