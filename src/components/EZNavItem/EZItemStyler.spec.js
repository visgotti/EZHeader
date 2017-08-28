import { expect } from 'chai';
import EZNavItemStyler from './EZNavItemStyler';

// Interaction Test----------------------------------------------------

let params = {};
beforeEach(() => {
    params = {
        fixedWidth: 'auto',
        colorStyles: {
            fontColor: 'red',
            fontColorHover: 'blue',
            backgroundColor: 'red',
            backgroundColorHover: 'pink',
        },
        hoverTransition: 'none',
    };
});

test('the navItem should have fixed width style when fixedWidth is auto', () => {
    const styleObject = EZNavItemStyler(
        params.fixedWidth, params.colorStyles, params.hoverTransition);
    const navItemClassList = styleObject.classes.navItemClass.split(' ');
    expect(navItemClassList.length).to.equal(1);
    expect(navItemClassList).to.contain('ez-nav-item');

    const navItemStyles = styleObject.styles.navItemStyle;
    expect(navItemStyles.color).to.equal('red');
    expect(navItemStyles.width).to.equal('auto');
});


test('the navItem should have 100px width style and have the ez-nav-fixed-width class when fixedWidth prop is a measurement of 100px', () => {
    params.fixedWidth = '100px';
    const styleObject = EZNavItemStyler(
        params.fixedWidth, params.colorStyles, params.hoverTransition);
    const navItemClassList = styleObject.classes.navItemClass.split(' ');
    expect(navItemClassList.length).to.equal(2);
    expect(navItemClassList).to.contain('ez-nav-item');
    expect(navItemClassList).to.contain('ez-nav-fixed-width');

    const navItemStyles = styleObject.styles.navItemStyle;
    expect(navItemStyles.color).to.equal('red');
    expect(navItemStyles.width).to.equal('100px');
});

test('the navBackground classes should be correct when hoverTransition is slideRight', () => {
    params.hoverTransition = 'slideRight';
    const styleObject = EZNavItemStyler(
        params.fixedWidth, params.colorStyles, params.hoverTransition);

    const navBackground1ClassList = styleObject.classes.navBackground1Class.split(' ');
    expect(navBackground1ClassList.length).to.equal(2);
    expect(navBackground1ClassList).to.contain('ez-nav-item-background');
    expect(navBackground1ClassList).to.contain('ez-nav-item-background1-slide-right');

    const navBackground2ClassList = styleObject.classes.navBackground2Class.split(' ');
    expect(navBackground2ClassList.length).to.equal(2);
    expect(navBackground2ClassList).to.contain('ez-nav-item-background');
    expect(navBackground2ClassList).to.contain('ez-nav-item-background2-slide-right');
});

test('the navBackground classes when hoverTransition is slideLeft', () => {
    params.hoverTransition = 'slideLeft';
    const styleObject = EZNavItemStyler(
        params.fixedWidth, params.colorStyles, params.hoverTransition);

    const navBackground1ClassList = styleObject.classes.navBackground1Class.split(' ');
    expect(navBackground1ClassList.length).to.equal(2);
    expect(navBackground1ClassList).to.contain('ez-nav-item-background');
    expect(navBackground1ClassList).to.contain('ez-nav-item-background1-slide-left');

    const navBackground2ClassList = styleObject.classes.navBackground2Class.split(' ');
    expect(navBackground2ClassList.length).to.equal(2);
    expect(navBackground2ClassList).to.contain('ez-nav-item-background');
    expect(navBackground2ClassList).to.contain('ez-nav-item-background2-slide-left');
});

test('the navBackground classes are correct hoverTransition prop is rectangleIn', () => {
    params.hoverTransition = 'rectangleIn';
    const styleObject = EZNavItemStyler(
        params.fixedWidth, params.colorStyles, params.hoverTransition);

    const navBackground1ClassList = styleObject.classes.navBackground1Class.split(' ');
    expect(navBackground1ClassList.length).to.equal(2);
    expect(navBackground1ClassList).to.contain('ez-nav-item-background');
    expect(navBackground1ClassList).to.contain('ez-nav-item-background1-rectangle-in');

    const navBackground2ClassList = styleObject.classes.navBackground2Class.split(' ');
    expect(navBackground2ClassList.length).to.equal(2);
    expect(navBackground2ClassList).to.contain('ez-nav-item-background');
    expect(navBackground2ClassList).to.contain('ez-nav-item-background2-rectangle-in');
});

test('the navBackgrounds have the correct styles', () => {
    const styleObject = EZNavItemStyler(
        params.fixedWidth, params.colorStyles, params.hoverTransition);

    const navBackground1Styles = styleObject.styles.navBackground1Style;
    let styleLength = Object.keys(navBackground1Styles).length;
    expect(navBackground1Styles.backgroundColor).to.equal('red');
    expect(styleLength).to.equal(1);

    const navBackground2Styles = styleObject.styles.navBackground2Style;
    styleLength = Object.keys(navBackground2Styles).length;

    expect(navBackground2Styles.backgroundColor).to.equal('pink');
    expect(styleLength).to.equal(1);
});

test('the navBackground classes hoverTransition is none', () => {
    const styleObject = EZNavItemStyler(
        params.fixedWidth, params.colorStyles, params.hoverTransition);

    test('have correct classes', () => {
        const navBackground1ClassList = styleObject.classes.navBackground1Class.split(' ');
        expect(navBackground1ClassList.length).to.equal(2);
        expect(navBackground1ClassList).to.contain('ez-nav-item-background');
        expect(navBackground1ClassList).to.contain('ez-nav-item-background1-none');

        const navBackground2ClassList = styleObject.classes.navBackground2Class.split(' ');
        expect(navBackground2ClassList.length).to.equal(2);
        expect(navBackground2ClassList).to.contain('ez-nav-item-background');
        expect(navBackground2ClassList).to.contain('ez-nav-item-background2-none');
    });
});
