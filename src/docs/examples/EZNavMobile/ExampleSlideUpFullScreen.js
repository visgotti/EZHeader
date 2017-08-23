import React from 'react';
import EZNavMobile from 'EZHeader/EZNavMobile';

/** Slide up full screen menu animation. */
class ExampleSlideDownFullScreen extends React.Component {
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
        const zIndex = this.state.toggled ? 2000 : 0;
        const btnMsg = this.state.toggled ? 'Hide menu!' : 'Show menu!';

        return (
            <div>
                <button style = {{position: 'relative', zIndex}}onClick={this.toggle.bind(this)}>{btnMsg}</button>
                <EZNavMobile animation={'slide-up-full'} isToggled={ this.state.toggled }/>
            </div>
        )
    }
}

export default ExampleSlideDownFullScreen;