import { shallow } from 'enzyme';
import React from 'react';
import EZHamburger from './EZHamburger';

// Interaction Test----------------------------------------------------
test('does have ez-hamburger class', () => {
    const wrapper = shallow(<EZHamburger onClick={() => {}} active={false} />);
    expect(wrapper.find('.ez-hamburger')).toHaveLength(1);
});

test('does not have active class when the active prop is set to false', () => {
    const wrapper = shallow(<EZHamburger onClick={() => {}} active={false} />);
    expect(wrapper.find('.ez-hamburger-active')).toHaveLength(0);
});

test('does have active class when the active prop is set to true', () => {
    const wrapper = shallow(<EZHamburger onClick={() => {}} active />);
    expect(wrapper.find('.ez-hamburger-active')).toHaveLength(1);
});

test('does have spin animation class when given spin as animation property', () => {
    const wrapper = shallow(<EZHamburger onClick={() => {}} animation="spin" active />);
    expect(wrapper.find('.ez-hamburger-animation-spin')).toHaveLength(1);
});

test('has class ez-fixed-top-right if given fixed-top-right for the position prop.', () => {
    const wrapper = shallow(<EZHamburger positionOnToggle="fixed-top-right" onClick={() => {}} />);
    expect(wrapper.find('.ez-fixed-top-right')).toHaveLength(1);
});

test('has class ez-fixed-top-left if given fixed-top-left for the position prop.', () => {
    const wrapper = shallow(<EZHamburger positionOnToggle="fixed-top-left" onClick={() => {}} />);
    expect(wrapper.find('.ez-fixed-top-left')).toHaveLength(1);
});
