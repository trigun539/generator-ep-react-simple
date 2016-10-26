import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';
import HelloWorld         from './../../src/components/hello-world';

describe('<HelloWorld> ::', () => {
	it('should show hello world ::', () => {
		const wrapper = shallow(<HelloWorld />);

		expect(wrapper.children().text()).to.equal('Hello World');
	});
});
