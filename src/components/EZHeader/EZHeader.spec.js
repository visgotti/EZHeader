import React from 'react';
import { shallow } from 'enzyme';

import EZHeader from './EZHeader';
import EZHeaderRow from '../EZHeaderRow';

// Interaction Test----------------------------------------------------
test('creates element when ez-header class', () => {
    const wrapper = shallow(
        <EZHeader height="50px" screenSizeMax={1000} screenSizeMin={0}>
            <EZHeaderRow height="50px" />
        </EZHeader>);
    expect(wrapper.find('.ez-header').exists()).toBe(true);
});
