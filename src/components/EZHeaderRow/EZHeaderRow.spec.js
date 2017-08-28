import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import EZHeaderRow from './EZHeaderRow';

test('creates element when ez-header class', () => {
    const wrapper = shallow(<EZHeaderRow height="50px"><div /></EZHeaderRow>);
    expect(wrapper.find('.ez-header-row').exists()).to.equal(true);
});
