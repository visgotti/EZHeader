import React from 'react';
import EZNavItem from 'EZHeader/EZNavItem';


/** Slide right nav item*/
class ExampleSlideRightTransition extends React.Component {

    render() {

        const colorStyles = {
            fontColor: 'black',
            fontColorHover: 'black',
            backgroundColor: 'white',
            backgroundColorHover: 'darkred'
        };

        return (
            <div>
                <EZNavItem colorStyles={colorStyles} hoverTransition='slideRight' value="test"/>
            </div>
        )
    }
}

export default ExampleSlideRightTransition;