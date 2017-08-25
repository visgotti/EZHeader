import React from 'react';
import EZNavItem from 'EZHeader/EZNavItem';


/** Nav item with fixed width and height*/
class ExampleFixedWidthAndHeightNavItem extends React.Component {

    render() {

        return (
            <div>
                <EZNavItem style={{height:'40px'}} fixedWidth='60px' hoverTransition='slideRight' value="test"/>
            </div>
        )
    }
}

export default ExampleFixedWidthAndHeightNavItem;