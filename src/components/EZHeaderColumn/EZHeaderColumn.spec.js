import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import EZHeaderColumn from './EZHeaderColumn';

test('creates element when ez-header class', () => {
    const wrapper = shallow(<EZHeaderColumn height="50px"><div /></EZHeaderColumn>);
    expect(wrapper.find('.ez-header-column').exists()).to.equal(true);
});
