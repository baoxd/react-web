const path = require('path')

module.exports = {
	entry: {
		index: './src/index.js',
		vendors: ['react', 'react-dom', 'react-router-dom', 'antd']
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].chunk.js'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css', '.less', '.scss', '.json'],
		modules: [
			path.resolve(__dirname, './src'),
			path.resolve(__dirname, './node_modules')
		]
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				include: [path.resolve(__dirname, './src')],
				exclude:  path.resolve(__dirname, './node_modules')
			}
		]
	}
}