const path = require('path')
const autoprefixerOptions = {
	browsers: [
		'>1%',
		'last 4 versions',
		'Firefox ESR',
		'not ie < 9'
	]
}

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
				exclude:  path.resolve(__dirname, './node_modules'),
				options: {
					plugins: [
						"transform-decorators-legacy",
						// 实现对antd的模块加载，在使用antd模块时 只需引入js文件，css文件不用手动引入
						['import', [{ libraryName: 'antd', style: true }]]
					],
					cacheDirectory: true
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')(autoprefixerOptions)]
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')(autoprefixerOptions)]
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')(autoprefixerOptions)]
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)(\?.*)?$/,
				loader: 'url-loader?limit=1024'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	}
}