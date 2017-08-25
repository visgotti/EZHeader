import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, render, mount} from 'enzyme';

import EZHeader from './EZHeader';
import EZNavMobile from '../EZNavMobile';
import EZNav from '../EZNav';


// Interaction Test----------------------------------------------------
test('creates element when ez-header class', () => {
    const wrapper = shallow(<EZHeader height='50px'/>)
    expect(wrapper.find('.ez-header').exists()).toBe(true)
});


test('shows EZNav element and hides the EZNavMobile element when its not mobile view (correctly gives isMobileView prop to children).', () => {
    const wrapper = render(<EZHeader height='50px'>
                            <EZNav/>
                            <EZNavMobile/>
                          </EZHeader>)

    expect(wrapper.find('.ez-nav').hasClass('ez-hide')).toBe(false)
    expect(wrapper.find('.ez-nav-mobile').hasClass('ez-hide')).toBe(true)

})


test('hides EZNav element and shows the EZNavMobile element when it is mobile view (correctly gives isMobileView prop to children)', () => {
    const wrapper = render(<EZHeader height='50px'>
        <EZNav/>
        <EZNavMobile/>
    </EZHeader>)

    expect(wrapper.find('.ez-nav').hasClass('ez-hide')).toBe(true)
    expect(wrapper.find('.ez-nav-mobile').hasClass('ez-hide')).toBe(false)

})
