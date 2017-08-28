import { shallow } from 'enzyme';
import React from 'react';
import EZNavMobile from './EZNavMobile';

// Interaction Test----------------------------------------------------
test('has class ez-nav-mobile and not be toggled by default', () => {
    const wrapper = shallow(<EZNavMobile />);
    expect(wrapper.find('.ez-nav-mobile')).toHaveLength(1);
    expect(wrapper.find('.ez-nav-mobile--toggled')).toHaveLength(0);
});

test('has class ez-nav-mobile--toggled', () => {
    const wrapper = shallow(<EZNavMobile isMobileView isToggled />);
    expect(wrapper.find('.ez-nav-mobile--toggled')).toHaveLength(1);
});

test('has class ez-nav-mobile--animation-slide-down-full', () => {
    const wrapper = shallow(<EZNavMobile isMobileView animation="slide-down-full" />);
    expect(wrapper.find('.ez-nav-mobile--animation-slide-down-full')).toHaveLength(1);
});

test('has class ez-nav-mobile--animation-slide-up-full', () => {
    const wrapper = shallow(<EZNavMobile isMobileView animation="slide-up-full" />);
    expect(wrapper.find('.ez-nav-mobile--animation-slide-up-full')).toHaveLength(1);
});

test('has class ez-hide when isMobileView is false', () => {
    const wrapper = shallow(<EZNavMobile isMobileView={false} animation="slide-up-full" />);
    expect(wrapper.find('.ez-hide')).toHaveLength(1);
});

test('does not have class ez-hide when isMobileView is true', () => {
    const wrapper = shallow(<EZNavMobile isMobileView animation="slide-up-full" />);
    expect(wrapper.find('.ez-hide')).toHaveLength(0);
});
