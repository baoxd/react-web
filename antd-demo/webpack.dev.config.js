const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = merge(webpackBaseConfig, {
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new InterpolateHtmlPlugin({
        	'PUBLIC_URL': './static'
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development'),
          
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        })
	],
	devServer: {
		port: 8088,
		contentBase: ".",
		hot: true,
		open: true,
		inline: true,
		compress: true,
		historyApiFallback: true,
		stats: {
			colors: true
		}
	}
});