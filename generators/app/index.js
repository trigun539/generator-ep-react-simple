'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
	prompting: function () {

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the breathtaking ' + chalk.red('generator-ep-react-ui-only') + ' generator!'
		));

		var prompts = [{
			type: 'input',
			name: 'name',
			message: 'Your project name',
			default: this.appname // Default to current folder name
		}, {
			type: 'input',
			name: 'description',
			message: 'Description',
			default: 'Awesome project'
		}];

		return this.prompt(prompts).then(function (props) {
			// To access props later use this.props.someAnswer;
			this.props = props;
		}.bind(this));
	},

	writing: function () {
		// App.js
		this.fs.copy(
			this.templatePath('src/app.js'),
			this.destinationPath('src/app.js')
		);

		// webpack.config.js
		this.fs.copy(
			this.templatePath('webpack.config.js'),
			this.destinationPath('webpack.config.js')
		);

		// .babelrc
		this.fs.copy(
			this.templatePath('.babelrc'),
			this.destinationPath('.babelrc')
		);

		// package.json
		this.fs.copyTpl(
			this.templatePath('package.json'),
			this.destinationPath('package.json'),
			{
				name: this.props.name,
				description: this.props.description
			}
		);

		// index.html
		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath('index.html'),
			{
				name: this.props.name
			}
		);

	},

	install: function () {
		this.npmInstall([
			'react', 
			'react-dom',
			'babel-core',
			'babel-loader', 
			'webpack@beta', 
			'babel-preset-es2015', 
			'babel-preset-react', 
			'babel-preset-stage-0',
			'serve'
		], {'save-dev': true});
	}
});
