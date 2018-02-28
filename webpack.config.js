const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./app/App.js', './app/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // { // regular css files
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({
            //         loader: 'css-loader?importLoaders=1',
            //     }),
            // },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file   
            filename: '../css/[name].bundle.css',
            allChunks: true,
        }),
    ],
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    }
}