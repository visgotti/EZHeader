import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
require('./EZNav.sass')

/** Nav to contain NavItems on regular header*/

function EZNav({children}){


    const navItemClass = classNames({
        'ez-nav': true,
    });


    return (
        <ul className = {navItemClass}>
            { children }
        </ul>
    )
}

EZNav.propTypes = {};
EZNav.defaultProps = {};

export default EZNav;