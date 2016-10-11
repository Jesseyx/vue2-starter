var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './resources/assets/js/main.js',
    output: {
        path: './public/js',
        publicPath: '/js/',
        filename: 'main.js',
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                test: /\.js$/,
                loader: 'babel',
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass'],
            },
            {
                test: /\.(svg|eot|woff2|woff|ttf)$/,
                loader: 'file?emitFile=false&name=../fonts/bootstrap/[name].[ext]',
            },
        ],
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
    ];
} else {
    module.exports.devtool = '#source-map';
}
