var webpack = require('webpack');
var path    = require('path');
var resolve = path.resolve;
var join    = path.join;

module.exports = {
	context: join(__dirname, 'src'),
	entry: './app.js',
	output: {
		path: join(__dirname, 'dist'),
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
				exclude: join(__dirname, 'node_modules')
			}
		]
	}
};
