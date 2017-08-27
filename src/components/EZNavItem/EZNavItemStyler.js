import classNames from 'classnames';

function EZNavItemStyler(fixedWidth, colorStyles, hoverTransition) {

    let styleObject = {
        classes: {
            navItemClass:{},
            navBackground1Class:{},
            navBackground2Class:{}
        },
        styles: {
            navItemStyle:{},
            navBackground1Style:{},
            navBackground2Style:{}
        }
    };


    styleObject.classes.navItemClass = classNames({
        'ez-nav-item': true,
        'ez-nav-fixed-width': fixedWidth !== 'auto',
    });

    styleObject.classes.navBackground1Class = classNames({
        'ez-nav-item-background': true,
        'ez-nav-item-background1-none' : hoverTransition === 'none',
        'ez-nav-item-background1-slide-right': hoverTransition === 'slideRight',
        'ez-nav-item-background1-slide-left': hoverTransition === 'slideLeft',
        'ez-nav-item-background1-rectangle-in': hoverTransition === 'rectangleIn',

    });

    styleObject.classes.navBackground2Class = classNames({
        'ez-nav-item-background': true,
        'ez-nav-item-background2-none' : hoverTransition === 'none',
        'ez-nav-item-background2-slide-right': hoverTransition === 'slideRight',
        'ez-nav-item-background2-slide-left': hoverTransition === 'slideLeft',
        'ez-nav-item-background2-rectangle-in': hoverTransition === 'rectangleIn',
    });

    styleObject.styles.navItemStyle = {
        color: colorStyles.fontColor,
        width: fixedWidth,
    };

    styleObject.styles.navBackground1Style = {
        backgroundColor: colorStyles.backgroundColor,
    };

    styleObject.styles.navBackground2Style = {
        backgroundColor: colorStyles.backgroundColorHover,
    };

    return styleObject
}

export default EZNavItemStyler