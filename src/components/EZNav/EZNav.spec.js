import React from 'react';
import renderer from 'react-test-renderer';
import EZNavItem from '../EZNavItem';
import EZNav from './EZNav';

import {shallow, mount} from 'enzyme';

// Interaction Test----------------------------------------------------
test('creates an unordered list when it renders', () => {
    const wrapper = shallow(<EZNav/>)
    expect(wrapper.find('ul').exists()).toBe(true)
});

test('creates an unordered list with the correct class', () => {
    const wrapper = shallow(<EZNav/>)
    expect(wrapper.find('.ez-nav')).toHaveLength(1)
});

test('creates an unordered list with 2 EZNav components in it', () => {
    const wrapper = mount(
        <EZNav>
            <EZNavItem value="Test"/>
            <EZNavItem value="Test2"/>
        </EZNav>
    )
    expect(wrapper.find('li')).toHaveLength(2)
    expect(wrapper.find('.ez-nav-item')).toHaveLength(2)

})