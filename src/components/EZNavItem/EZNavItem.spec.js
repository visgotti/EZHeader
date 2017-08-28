import { shallow } from 'enzyme';

import React from 'react';
import EZNavItem from './EZNavItem';

// Interaction Test----------------------------------------------------
test('creates a list item when its rendered', () => {
    const wrapper = shallow(<EZNavItem value="Test" />);
    expect(wrapper.find('.ez-nav-item').exists()).toBe(true);
});

test('creates a list item with the value to correctly be displayed inside of it', () => {
    const wrapper = shallow(<EZNavItem value="Test" />);
    expect(wrapper.find('.ez-nav-item').text()).toContain('Test');
});

test('has the correct classname of just ez-nav-tem ', () => {
    const wrapper = shallow(<EZNavItem value="Test" />);
    expect(wrapper.find('.ez-nav-item')).toHaveLength(1);
});

test('has ez-nav-fixed-width class if given a fixedWidth value', () => {
    const wrapper = shallow(<EZNavItem fixedWidth="100px" value="Test" />);
    expect(wrapper.find('.ez-nav-fixed-width')).toHaveLength(1);
});


test('does not have ez-nav-fixed-width if not given a fixedWidth value', () => {
    const wrapper = shallow(<EZNavItem value="Test" />);
    expect(wrapper.find('.ez-nav-fixed-width')).toHaveLength(0);
});

