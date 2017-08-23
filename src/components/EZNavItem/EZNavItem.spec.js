import React from 'react';
import renderer from 'react-test-renderer';
import EZNavItem from './EZNavItem';
import {shallow} from 'enzyme';

// Interaction Test----------------------------------------------------
test('creates a list item when its rendered', () => {
    const wrapper = shallow(<EZNavItem value={'Test'}/>)
    expect(wrapper.find('li').exists()).toBe(true)

});

test('creates a list item with the value to correctly be displayed inside of it', () => {
    const wrapper = shallow(<EZNavItem value={'Test'}/>)
    expect(wrapper.find('li').text()).toContain('Test')
});

test('has the correct classname of just ez-nav-tem ', () => {
    const wrapper = shallow(<EZNavItem value={'Test'}/>)
    expect(wrapper.find('.ez-nav-item')).toHaveLength(1)
    expect(wrapper.find('.ez-nav-item--mobile')).toHaveLength(0)

});


test('has the correct classname of ez-nav-item and ez-nav-item-mobile', () => {
    const wrapper = shallow(<EZNavItem isMobileView={true} value={'Test'}/>)
    expect(wrapper.find('.ez-nav-item')).toHaveLength(1)
    expect(wrapper.find('.ez-nav-item--mobile')).toHaveLength(1)

});
