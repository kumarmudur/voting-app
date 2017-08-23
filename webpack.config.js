var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + "/app/index.js",

    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: [ "es2015", "react", "stage-2" ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader'
            }
        ]
    },

    devServer: {
        compress: true,
        stats: "errors-only",
        open: true
    }

}