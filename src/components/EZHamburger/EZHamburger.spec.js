import React from 'react';
import renderer from 'react-test-renderer';
import EZHamburger from './EZHamburger';
import {shallow} from 'enzyme';

// Interaction Test----------------------------------------------------
test('does not have ez-hamburger class', () => {
    const wrapper = shallow(<EZHamburger onClick={()=>{}} active={false}/>)
    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger')).toHaveLength(1)

});

test('does not have active class when the active prop is set to false', () => {
    const wrapper = shallow(<EZHamburger onClick={()=>{}} active={false}/>)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger-active')).toHaveLength(0)

});

test('does have active class when the active prop is set to true', () => {
    const wrapper = shallow(<EZHamburger onClick={()=>{}} active/>)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger-active')).toHaveLength(1)
});

test('does have spin animation class when given spin as animation property', () => {
    const wrapper = shallow(<EZHamburger onClick={()=>{}} animation="spin" active/>)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger-animation-spin')).toHaveLength(1)

});
