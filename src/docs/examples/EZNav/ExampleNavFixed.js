import React from 'react';
import EZNav from 'EZHeader/EZNav';
import EZNavItem from 'EZHeader/EZNavItem';


/** Nav with fixed width and height on the nav items and a slide right animation */
class ExampleNav extends React.Component {

    render() {

        return (
            <div>
                <EZNav>
                    <EZNavItem style={{height: '50px'}} hoverTransition={'slideRight'} fixedWidth={'60px'} value="test"/>
                    <EZNavItem style={{height: '50px'}} hoverTransition={'slideRight'} fixedWidth={'60px'} value="test2"/>
                    <EZNavItem style={{height: '50px'}} hoverTransition={'slideRight'} fixedWidth={'60px'} value="test3"/>
                </EZNav>
            </div>
        )
    }
}

export default ExampleNav;