const webpackBase = require('./build/webpack.base');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    ...webpackBase,
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new Dotenv(),
        new CopyPlugin([
            {
                context: '../View',
                from: 'assets/**/*.*'
            }
        ])
    ]
};
