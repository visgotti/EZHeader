import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
require('./EZNavMobile.sass')

/** Nav menu to contain NavItems for mobile views*/

function EZNavMobile({children, isToggled, animation, isMobileView}){

    const navItemClass = classNames(
        'ez-nav-mobile',
        'ez-nav-mobile--animation-'+animation,
        {
            'ez-nav-mobile--toggled':  isToggled,
            'ez-hide': !isMobileView
        });

    return (
        <div className={navItemClass}>
            <ul style={{ listStyle: 'none' }}>
                { children }
            </ul>
        </div>
    )

}

EZNavMobile.propTypes = {

    /** If the screen size is the size for toggling mobile */
    isMobileView: PropTypes.bool,

    /** Name of the animation you want the menu to do when being toggled */
    animation: PropTypes.oneOf(['none', 'slide-down-full', 'slide-up-full', 'slide-left-full', 'slide-right-full']),

    /** If the mobile nav menu is toggled or not. */
    isToggled: PropTypes.bool
}

EZNavMobile.defaultProps = {
    animation: 'none',
    isToggled: false,
    isMobileView: false
};

export default EZNavMobile;