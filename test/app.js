import path    from 'path';
import assert  from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator-ep-react-ui-only:app', () => {

	before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
			.withPrompts({
				name: 'testproject',
				description: 'Awesome project'
			})
      .toPromise();
  });

	it('should creates files', () => {
    assert.file([
      'webpack.config.js',
      'package.json',
      '.gitignore',
      '.babelrc',
      'favicon.ico',
      'index.html',
			'src/app.js',
			'src/components/hello-world.js',
			'test/mocha.opts',
			'test/components/hello-world.spec.js',
			'test/helpers/setup.js'
    ]);
  });
});
