var webpack = require('webpack')
var path = require('path')
var srcPath = path.join(__dirname, "js")
var assets = path.join(__dirname, '../app/assets/javascripts')

module.exports = {
	entry: {
		index: srcPath
	},

	output: {
		filename: '[name].js',
		path: assets
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		root: srcPath,
		extensions: ["", ".js"],
		moduleDirectories: ['node_modules']
	},
	debug: true
}