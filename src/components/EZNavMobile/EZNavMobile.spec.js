import React from 'react';
import renderer from 'react-test-renderer';
import EZNavMobile from './EZNavMobile';
import {shallow} from 'enzyme';

// Interaction Test----------------------------------------------------
test('has class ez-nav-mobile and not be toggled by default', () => {
    const wrapper = shallow(<EZNavMobile/>)
    expect(wrapper.find('.ez-nav-mobile')).toHaveLength(1)
    expect(wrapper.find('.ez-nav-mobile--toggled')).toHaveLength(0)
});

test('has class ez-nav-mobile--toggled', () => {
    const wrapper = shallow(<EZNavMobile isToggled/>)
    expect(wrapper.find('.ez-nav-mobile--toggled')).toHaveLength(1)
});

test('has class ez-nav-mobile--animation-slide-down-full', () => {
    const wrapper = shallow(<EZNavMobile animation='slide-down-full'/>)
    expect(wrapper.find('.ez-nav-mobile--animation-slide-down-full')).toHaveLength(1)
});

test('has class ez-nav-mobile--animation-slide-up-full', () => {
    const wrapper = shallow(<EZNavMobile animation='slide-up-full'/>)
    expect(wrapper.find('.ez-nav-mobile--animation-slide-up-full')).toHaveLength(1)
});
