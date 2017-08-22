import React from 'react';
import PropTypes from 'prop-types';
require('./EZHamburger.sass')


/** Hamburger menu toggle */

function EZHamburger({onClick, active, animation}){

    let classes = active ? "ez-hamburger ez-hamburger-active" : "ez-hamburger";

    // append the animation to the class name.
    classes = classes + ' ez-hamburger-animation-' + animation;
    return (
        <div onClick={onClick} className={classes}>
            <div className="ez-hamburger-box">
                <div className = "ez-hamburger-inner"/>
            </div>
        </div>
    )
}

EZHamburger.propTypes = {
    /** Logic that gets ran when the hamburger is clicked */
    onClick: PropTypes.func.isRequired,

    /** If the Hamburger Button is toggled/active or not. */
    active: PropTypes.bool,

    /** name of the animation type you want the hamburger to play */
    animation: PropTypes.oneOf(['none', 'spin'])
}

EZHamburger.defaultProps = {
    active: false,
    animation: 'none'
};

export default EZHamburger;