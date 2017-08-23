import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
require('./EZNavItem.sass');

/** Nav Item for Nav list */

function EZNavItem({ value, isMobileView }){

    const navItemClass = classNames({
        'ez-nav-item': true,
        'ez-nav-item--mobile': isMobileView
    });

    return (
        <li className={navItemClass}>
            { value }
        </li>
    )
}

EZNavItem.propTypes = {
    /** What the nav item displays. */
    value: PropTypes.string.isRequired,

    /** If the screen size is small enough to be showing the mobile layout. */
    isMobileView: PropTypes.bool
}

EZNavItem.defaultProps = {
    isMobileView: false
};

export default EZNavItem;