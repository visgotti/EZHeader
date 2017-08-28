import { shallow, mount } from 'enzyme';
import React from 'react';
import EZNavItem from '../EZNavItem';
import EZNav from './EZNav';

test('creates a div with ez-nav class', () => {
    const wrapper = shallow(<EZNav isMobileView={false} />);
    expect(wrapper.find('div.ez-nav')).toHaveLength(1);
});

test('creates an unordered list with 2 EZNavItem components in it', () => {
    const wrapper = mount(
        <EZNav isMobileView={false}>
            <EZNavItem value="Test" />
            <EZNavItem value="Test2" />
        </EZNav>);
    expect(wrapper.find('.ez-nav-item')).toHaveLength(2);
});

test('does not have class ez-hidden when isMobileView is false', () => {

    const wrapper = mount(
        <EZNav isMobileView={false}>
            <EZNavItem value="Test" />
            <EZNavItem value="Test2" />
        </EZNav>);
    expect(wrapper.find('.ez-hidden')).toHaveLength(0);
});

test('does have class ez-hidden when isMobileView is true', () => {

    const wrapper = mount(
        <EZNav isMobileView>
            <EZNavItem value="Test" />
            <EZNavItem value="Test2" />
        </EZNav>);
    expect(wrapper.find('.ez-hidden')).toHaveLength(0);
});
