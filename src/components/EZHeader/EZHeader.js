import React from 'react';
import PropTypes from 'prop-types';

class EZHeader extends React.Component {

    constructor(){
        super();
        this.state = {
            isMobileView: false
        }
    }

    setMobileViewState() {
        if(document.documentElement.clientWidth <= this.props.mobileMenuShowWidth) {
            this.setState({ isMobileView: true })
        } else {
            this.setState({ isMobileView: false })
        }
    }

    componentDidMount() {
        this.setMobileViewState()
        window.addEventListener('resize', this.setMobileViewState.bind(this));
    }

    render() {

        const { height, children } = this.props;
        const childrenWithProps = React.Children.map(children,
            (child) => React.cloneElement(child, {
                isMobileView: this.state.isMobileView
            })
        );
        return (
            <div style={{ height }} className="ez-header">
                { childrenWithProps }
            </div>
        )
    }
}

EZHeader.propTypes = {
    /** If the screen size is the size for toggling mobile */
    mobileToggleSize: PropTypes.integer,
}

EZHeader.defaultProps = {
    mobileToggleSize: 700
}

export default EZHeader