const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', './dist'),
        clean: true,
        publicPath: '/',
    },
        resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html')
        }),
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env')
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true,
    }
};
