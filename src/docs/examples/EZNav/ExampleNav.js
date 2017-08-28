import React from 'react';
import EZNav from 'EZHeader/EZNav';
import EZNavItem from 'EZHeader/EZNavItem';

/** Simple Nav that goes on a header */
function ExampleNav() {
    return (
        <div>
            <EZNav>
                <EZNavItem value="test" />
                <EZNavItem value="test2" />
                <EZNavItem value="test3" />
            </EZNav>
        </div>
    );
}

export default ExampleNav;
