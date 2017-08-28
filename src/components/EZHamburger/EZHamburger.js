import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

require('./EZHamburger.sass');


/** Hamburger menu toggle */

function EZHamburger({ onClick, active, animation, positionOnToggle, style }) {
    const classes = classNames(
        `ez-hamburger-animation-${animation}`,
        {
            'ez-hamburger': true,
            'ez-hamburger-active': active,
            'ez-fixed-top-right': positionOnToggle === 'fixed-top-right',
            'ez-fixed-top-left': positionOnToggle === 'fixed-top-left',
        });

    return (
        <div role="presentation" style={{ ...style }} onClick={onClick} className={classes}>
            <div className="ez-hamburger-box">
                <div className="ez-hamburger-inner" />
            </div>
        </div>
    );
}

EZHamburger.propTypes = {
    /** Logic that gets ran when the hamburger is clicked */
    onClick: PropTypes.func.isRequired,

    /** If the Hamburger Button is toggled/active or not. */
    active: PropTypes.bool,

    /** name of the animation type you want the hamburger to play */
    animation: PropTypes.oneOf(['none', 'spin']),

    /** positioning of the hamburger when the menu is toggled */
    positionOnToggle: PropTypes.oneOf(['normal', 'fixed-top-right', 'fixed-top-left']),

    /** any additioning css style you want to apply */
    style: PropTypes.shape,
};

EZHamburger.defaultProps = {
    active: false,
    animation: 'none',
    positionOnToggle: 'normal',
    style: {},
};

export default EZHamburger;
