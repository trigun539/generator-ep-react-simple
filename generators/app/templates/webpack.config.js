var webpack = require('webpack');
var resolve = require('path').resolve;

module.exports = {
	context: resolve('src'),
	entry: './app.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	resolve: {
		modules: [
			'node_modules',
			'./src'
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: 'node_modules'
			}
		]
	}
};
