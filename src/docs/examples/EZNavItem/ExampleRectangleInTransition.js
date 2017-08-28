import React from 'react';
import EZNavItem from 'EZHeader/EZNavItem';

/** Rectangle In transition nav item */
class ExampleSlideRightTransition extends React.Component {
    render() {
        return (
            <div>
                <EZNavItem hoverTransition="rectangleIn" value="test" />
            </div>
        );
    }
}

export default ExampleSlideRightTransition;
