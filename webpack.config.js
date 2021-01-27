const webpackBase = require('./build/webpack.base');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    ...webpackBase,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },
    plugins: [
        new VueLoaderPlugin(),
        new Dotenv()
        // new CopyPlugin([
        //     {
        //         context: 'View',
        //         from: 'assets/**/*.*'
        //     }
        // ])
    ]
};
