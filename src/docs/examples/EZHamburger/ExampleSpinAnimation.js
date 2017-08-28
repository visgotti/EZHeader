import React from 'react';
import EZHamburger from 'EZHeader/EZHamburger';

/** When toggled does spin animation */
class ExampleSpinAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            toggled: !prevState.toggled,
        }));
    }

    render() {
        return (
            <div style={{ height: '50px', width: '50px' }}>
                <EZHamburger
                    active={this.state.toggled}
                    animation="spin"
                    onClick={this.toggle}
                />
            </div>
        );
    }
}

export default ExampleSpinAnimation;
