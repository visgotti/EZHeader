import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Radium from 'radium';

import EZNavItemStyler from './EZNavItemStyler';

require('./EZNavItem.sass');

/** Nav Item for Nav list */
function EZNavItem({ value, fixedWidth, colorStyles, hoverTransition, style }){

    const styleObject = EZNavItemStyler(fixedWidth, colorStyles, hoverTransition)

    return (
        <div style = {{display: 'inline-block'}}>
            <div className={styleObject.classes.navItemClass} style = {{ ...styleObject.styles.navItemStyle, ...style}}>
                <div className='ez-nav-item-value'>
                    { value }
                    <div style = { styleObject.styles.navBackground1Style } className={styleObject.classes.navBackground1Class}/>
                    <div style = { styleObject.styles.navBackground2Style } className={styleObject.classes.navBackground2Class}/>
                </div>
            </div>
        </div>
    )
}

EZNavItem.propTypes = {
    /** What the nav item displays. */
    value: PropTypes.string.isRequired,

    /** if you want to set a fixed width for your nav item, if its set to 0 it will use the auto width */
    fixedWidth: PropTypes.string,

    /** string of color that you want to use for background */
    colorStyles: PropTypes.shape({
        fontColor: PropTypes.string,
        fontColorHover: PropTypes.string,
        backgroundColor: PropTypes.string,
        backgroundColorHover: PropTypes.string
    }),

    /** type of transition you want the nav item to do when it's hovered */
    hoverTransition: PropTypes.oneOf(['none', 'slideRight', 'slideLeft'])
}

EZNavItem.defaultProps = {
    fixedWidth: 'auto',
    hoverTransition: 'none',
    colorStyles: {
        fontColor: 'black',
        fontColorHover: 'blue',
        backgroundColor: 'red',
        backgroundColorHover: 'pink'
    }
};

export default Radium(EZNavItem);