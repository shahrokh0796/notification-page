const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,  {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    devServer: {
        static: './dist',
    },
});
