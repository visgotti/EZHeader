import React from 'react';
import EZNavMobile from 'EZHeader/EZNavMobile';
import EZHamburger from 'EZHeader/EZHamburger';
import EZHeader from 'EZHeader/EZHeader';


/** Slide down full screen menu animation. */
class ExampleHeaderPush extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
    }


    render() {
        return (
            <EZHeader>
                <EZNavMobile animation={'slide-down-full'} isToggled={ this.state.toggled }/>
                <EZNavMobile animation={'slide-down-full'} isToggled={ this.state.toggled }/>
            </EZHeader>
        )
    }
}

export default ExampleHeaderPush;