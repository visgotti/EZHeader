import React from 'react';
import renderer from 'react-test-renderer';
import EZHamburger from './EZHamburger';
import {shallow} from 'enzyme';

// Interaction Test----------------------------------------------------
test('does not have ez-hamburger class', () => {
    const wrapper = shallow(<EZHamburger isMobileView onClick={()=>{}} active={false}/>)
    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger')).toHaveLength(1)

});

test('does not have active class when the active prop is set to false', () => {
    const wrapper = shallow(<EZHamburger isMobileView onClick={()=>{}} active={false}/>)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger-active')).toHaveLength(0)

});

test('does have active class when the active prop is set to true', () => {
    const wrapper = shallow(<EZHamburger isMobileView onClick={()=>{}} active/>)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger-active')).toHaveLength(1)
});

test('does have spin animation class when given spin as animation property', () => {
    const wrapper = shallow(<EZHamburger isMobileView onClick={()=>{}} animation="spin" active/>)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hamburger-animation-spin')).toHaveLength(1)

});


test('has class ez-fixed-top-right if given fixed-top-right for the position prop.', () => {
    const wrapper = shallow(<EZHamburger isMobileView positionOnToggle='fixed-top-right' onClick={()=>{}}/>)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-fixed-top-right')).toHaveLength(1)

});

test('has class ez-fixed-top-left if given fixed-top-left for the position prop.', () => {
    const wrapper = shallow(<EZHamburger isMobileView positionOnToggle='fixed-top-left' onClick={()=>{}} />)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-fixed-top-left')).toHaveLength(1)

});

test('has class ez-hide when isMobileView is false', () => {
    const wrapper = shallow(<EZHamburger isMobileView={false} positionOnToggle='fixed-top-left' onClick={()=>{}} />)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hide')).toHaveLength(1)

});
test('does not have class ez-hide when isMobileView is true', () => {
    const wrapper = shallow(<EZHamburger isMobileView positionOnToggle='fixed-top-left' onClick={()=>{}} />)

    // Password input should have type of password initially
    expect(wrapper.find('.ez-hide')).toHaveLength(0)

});
