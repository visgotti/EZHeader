import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
require('./EZNavMobile.sass')

/** Nav menu to contain NavItems for mobile views*/

function EZNavMobile({children, isToggled, animation}){

    console.log('the istoggled is', isToggled)
    const navItemClass = classNames(
        'ez-nav-mobile',
        'ez-nav-mobile--animation-'+animation,
        {'ez-nav-mobile--toggled':  isToggled })

    console.log('the nav item class is', navItemClass)

    return (
        <div className={navItemClass}>
            <ul style={{ listStyle: 'none' }}>
                { children }
            </ul>
        </div>
    )
}

EZNavMobile.propTypes = {
    /** Name of the animation you want the menu to do when being toggled */
    animation: PropTypes.oneOf(['none', 'slide-down-full', 'slide-up-full', 'slide-left-full', 'slide-right-full']),

    /** If the mobile nav menu is toggled or not. */
    isToggled: PropTypes.bool
}

EZNavMobile.defaultProps = {
    animation: 'none',
    isToggled: false
};

export default EZNavMobile;