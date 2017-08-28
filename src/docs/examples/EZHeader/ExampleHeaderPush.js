import React from 'react';
import EZHeader from 'EZHeader/EZHeader';
import EZRow from 'EZHeader/EZHeaderRow';
import EZColumn from 'EZHeader/EZHeaderColumn';

/** Slide down full screen menu animation. */
class ExampleHeaderPush extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        };
    }

    render() {
        return (
            <EZHeader screenSizeMin={0} screenSizeMax={2000} height="80px">
                <EZRow height="40px">
                    <EZColumn width="40%">
                        <div />
                    </EZColumn>
                    <EZColumn width="60%">
                        <div />
                    </EZColumn>
                </EZRow>

                <EZRow height="20px">
                    <EZColumn width="80%">
                        <div />
                    </EZColumn>
                    <EZColumn width="10%">
                        <div />
                    </EZColumn>
                    <EZColumn width="10%">
                        <div />
                    </EZColumn>
                </EZRow>

                <EZRow height="20px">
                    <EZColumn width="100%">
                        <div />
                    </EZColumn>
                </EZRow>
            </EZHeader>
        );
    }
}

export default ExampleHeaderPush;
