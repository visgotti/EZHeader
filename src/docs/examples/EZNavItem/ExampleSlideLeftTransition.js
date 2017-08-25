import React from 'react';
import EZNavItem from 'EZHeader/EZNavItem';


/** Slide left nav item*/
class ExampleSlideLeftTransition extends React.Component {

    render() {

        const colorStyles = {
            fontColor: 'black',
            fontColorHover: 'black',
            backgroundColor: 'white',
            backgroundColorHover: 'darkred'
        };

        return (
            <div>
                <EZNavItem colorStyles={colorStyles} hoverTransition='slideLeft' value="test"/>
            </div>
        )
    }
}

export default ExampleSlideLeftTransition;