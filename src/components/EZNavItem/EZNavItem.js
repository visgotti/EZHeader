import React from 'react';
import PropTypes from 'prop-types';

/** Nav Item for Nav list */

function EZNavItem({value}){

    return (
        <li className = "ez-nav-item">
            { value }
        </li>
    )
}

EZNavItem.propTypes = {
    /** What the nav item displays. */
    value: PropTypes.string.isRequired
}

EZNavItem.defaultProps = {

};

export default EZNavItem;