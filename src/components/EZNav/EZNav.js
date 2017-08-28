import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

require('./EZNav.sass');

/** Nav to contain NavItems */

function EZNav({ children, isMobileView }) {
    const navItemClass = classNames({
        'ez-nav': true,
        'ez-hide': isMobileView,
    });

    return (
        <div className={navItemClass}>
            { children }
        </div>
    );
}

EZNav.propTypes = {
    /** If the screen size is the size for toggling mobile */
    isMobileView: PropTypes.bool,

    /** All the items you want to place in the nav section */
    children: PropTypes.element.isRequired,
};

EZNav.defaultProps = {
    isMobileView: false,
};

export default EZNav;
