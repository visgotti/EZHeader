import React from 'react';
import EZNavItem from 'EZHeader/EZNavItem';


/** Custom colored nav item*/
class ExampleNav extends React.Component {

    render() {

        const colorStyles = {
            fontColor: 'black',
            fontColorHover: 'black',
            backgroundColor: 'white',
            backgroundColorHover: 'darkred'
        };

        return (
            <div>
                <EZNavItem colorStyles={colorStyles} value="test"/>
            </div>
        )
    }
}

export default ExampleNav;