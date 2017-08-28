import React from 'react';
import EZNavMobile from 'EZHeader/EZNavMobile';

/** Slide down full screen menu animation. */
class ExampleSlideDownFullScreen extends React.Component {
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
        const zIndex = this.state.toggled ? 2000 : 0;
        const btnMsg = this.state.toggled ? 'Hide menu!' : 'Show menu!';

        return (
            <div>
                <button style={{ position: 'relative', zIndex }} onClick={this.toggle}>{btnMsg}</button>
                <EZNavMobile isMobileView animation={'slide-left-full'} isToggled={this.state.toggled} />
            </div>
        );
    }
}

export default ExampleSlideDownFullScreen;
