import React from 'react';
import EZHamburger from 'EZHeader/EZHamburger';

/** When toggled does spin animation */
class ExampleSpinAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
    }

    toggle() {
        this.setState(prevState => {
            return { toggled: !prevState.toggled };
        })
    }

    render() {
        return (
            <div style = {{height: '50px', width: '50px'}}>
               <EZHamburger isMobileView active={this.state.toggled} animation='spin' onClick={this.toggle.bind(this)}/>
            </div>
        )
    }
}

export default ExampleSpinAnimation;