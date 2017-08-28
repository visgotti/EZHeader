import React from 'react';
import PropTypes from 'prop-types';

require('./EZHeader.sass');

class EZHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
        };
    }

    componentDidMount() {
        this.setIsVisibleState();
        window.addEventListener('resize', this.setIsVisibleState.bind(this));
    }

    setIsVisibleState() {
        const clientWidth = document.documentElement.clientWidth;
        if (clientWidth <= this.props.screenSizeMax && clientWidth >= this.props.screenSizeMin) {
            this.setState({ isVisible: true });
        } else {
            this.setState({ isVisible: false });
        }
    }

    render() {
        const { height, children } = this.props;
        const display = this.state.isVisible ? 'block' : 'none';

        return (
            <div className="ez-header" style={{ height, display }}>
                { children }
            </div>
        );
    }
}

EZHeader.propTypes = {
    /** Min screen size for this menu to be visible */
    screenSizeMin: PropTypes.number.isRequired,

    /** Max screen size for this header to be visible */
    screenSizeMax: PropTypes.number.isRequired,

    /** Height of the header */
    height: PropTypes.number.isRequired,

    /** child rows in the header */
    children: PropTypes.element.isRequired,
};

EZHeader.defaultProps = {};

export default EZHeader;
