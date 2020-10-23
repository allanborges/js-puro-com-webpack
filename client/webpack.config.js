const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let plugins = [];

plugins.push(new HtmlWebpackPlugin(
    {
        hash: true,
        minify: {
            html5: true,
            collapseWhitespace: true,
            removeComments: true
        },
        template: "./clientes.html",
        filename: "index.html"
    }
));

plugins.push(new webpack.ProvidePlugin({
    'navegacao': 'router.js',
}));


module.exports = {
    mode: "development",

    entry: {
        app: "./main.js",
    },

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.png$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: 'images'
                    }
                }
            }
        ]
    }
}

