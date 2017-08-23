module.exports = /* eslint-disable */ [{"name":"EZHamburger","description":"Hamburger menu toggle","props":{"onClick":{"type":{"name":"func"},"required":true,"description":"Logic that gets ran when the hamburger is clicked"},"active":{"type":{"name":"bool"},"required":false,"description":"If the Hamburger Button is toggled/active or not.","defaultValue":{"value":"false","computed":false}},"animation":{"type":{"name":"enum","value":[{"value":"'none'","computed":false},{"value":"'spin'","computed":false}]},"required":false,"description":"name of the animation type you want the hamburger to play","defaultValue":{"value":"'none'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nrequire('./EZHamburger.sass')\n\n\n/** Hamburger menu toggle */\n\nfunction EZHamburger({onClick, active, animation}){\n\n    let classes = active ? \"ez-hamburger ez-hamburger-active\" : \"ez-hamburger\";\n\n    // append the animation to the class name.\n    classes = classes + ' ez-hamburger-animation-' + animation;\n    return (\n        <div onClick={onClick} className={classes}>\n            <div className=\"ez-hamburger-box\">\n                <div className = \"ez-hamburger-inner\"/>\n            </div>\n        </div>\n    )\n}\n\nEZHamburger.propTypes = {\n    /** Logic that gets ran when the hamburger is clicked */\n    onClick: PropTypes.func.isRequired,\n\n    /** If the Hamburger Button is toggled/active or not. */\n    active: PropTypes.bool,\n\n    /** name of the animation type you want the hamburger to play */\n    animation: PropTypes.oneOf(['none', 'spin'])\n}\n\nEZHamburger.defaultProps = {\n    active: false,\n    animation: 'none'\n};\n\nexport default EZHamburger;","examples":[{"name":"ExampleSpinAnimation","description":"When toggled does spin animation","code":"import React from 'react';\nimport EZHamburger from 'EZHeader/EZHamburger';\n\n/** When toggled does spin animation */\nclass ExampleSpinAnimation extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            toggled: false\n        };\n    }\n\n    toggle() {\n        this.setState(prevState => {\n            return { toggled: !prevState.toggled };\n        })\n    }\n\n    render() {\n        return (\n            <div>\n               <EZHamburger active={this.state.toggled} animation='spin' onClick={this.toggle.bind(this)}/>\n            </div>\n        )\n    }\n}\n\nexport default ExampleSpinAnimation;"}]},{"name":"EZNav","description":"Nav to contain NavItems on regular header","code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nrequire('./EZNav.sass')\n\n/** Nav to contain NavItems on regular header*/\n\nfunction EZNav({children}){\n\n\n    const navItemClass = classNames({\n        'ez-nav': true,\n    });\n\n\n    return (\n        <ul className = {navItemClass}>\n            { children }\n        </ul>\n    )\n}\n\nEZNav.propTypes = {};\nEZNav.defaultProps = {};\n\nexport default EZNav;","examples":[]},{"name":"EZNavItem","description":"Nav Item for Nav list","props":{"value":{"type":{"name":"string"},"required":true,"description":"What the nav item displays."},"isMobileView":{"type":{"name":"bool"},"required":false,"description":"If the screen size is small enough to be showing the mobile layout.","defaultValue":{"value":"false","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nrequire('./EZNavItem.sass');\n\n/** Nav Item for Nav list */\n\nfunction EZNavItem({ value, isMobileView }){\n\n    const navItemClass = classNames({\n        'ez-nav-item': true,\n        'ez-nav-item--mobile': isMobileView\n    });\n\n    return (\n        <li className={navItemClass}>\n            { value }\n        </li>\n    )\n}\n\nEZNavItem.propTypes = {\n    /** What the nav item displays. */\n    value: PropTypes.string.isRequired,\n\n    /** If the screen size is small enough to be showing the mobile layout. */\n    isMobileView: PropTypes.bool\n}\n\nEZNavItem.defaultProps = {\n    isMobileView: false\n};\n\nexport default EZNavItem;","examples":[]},{"name":"EZNavMobile","description":"Nav menu to contain NavItems for mobile views","props":{"animation":{"type":{"name":"enum","value":[{"value":"'none'","computed":false},{"value":"'slide-down-full'","computed":false},{"value":"'slide-up-full'","computed":false},{"value":"'slide-left-full'","computed":false},{"value":"'slide-right-full'","computed":false}]},"required":false,"description":"Name of the animation you want the menu to do when being toggled","defaultValue":{"value":"'none'","computed":false}},"isToggled":{"type":{"name":"bool"},"required":false,"description":"If the mobile nav menu is toggled or not.","defaultValue":{"value":"false","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nrequire('./EZNavMobile.sass')\n\n/** Nav menu to contain NavItems for mobile views*/\n\nfunction EZNavMobile({children, isToggled, animation}){\n\n    console.log('the istoggled is', isToggled)\n    const navItemClass = classNames(\n        'ez-nav-mobile',\n        'ez-nav-mobile--animation-'+animation,\n        {'ez-nav-mobile--toggled':  isToggled })\n\n    console.log('the nav item class is', navItemClass)\n\n    return (\n        <div className={navItemClass}>\n            <ul style={{ listStyle: 'none' }}>\n                { children }\n            </ul>\n        </div>\n    )\n}\n\nEZNavMobile.propTypes = {\n    /** Name of the animation you want the menu to do when being toggled */\n    animation: PropTypes.oneOf(['none', 'slide-down-full', 'slide-up-full', 'slide-left-full', 'slide-right-full']),\n\n    /** If the mobile nav menu is toggled or not. */\n    isToggled: PropTypes.bool\n}\n\nEZNavMobile.defaultProps = {\n    animation: 'none',\n    isToggled: false\n};\n\nexport default EZNavMobile;","examples":[{"name":"ExampleSlideDownFullScreen","description":"Slide down full screen menu animation.","code":"import React from 'react';\nimport EZNavMobile from 'EZHeader/EZNavMobile';\n\n/** Slide down full screen menu animation. */\nclass ExampleSlideDownFullScreen extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            toggled: false\n        };\n    }\n\n    toggle() {\n        this.setState(prevState => {\n            return { toggled: !prevState.toggled };\n        })\n    }\n\n    render() {\n        const zIndex = this.state.toggled ? 2000 : 0;\n        const btnMsg = this.state.toggled ? 'Hide menu!' : 'Show menu!';\n        return (\n            <div>\n                <button style = {{position: 'relative', zIndex}}onClick={this.toggle.bind(this)}>{btnMsg}</button>\n                <EZNavMobile animation={'slide-down-full'} isToggled={ this.state.toggled }/>\n            </div>\n        )\n    }\n}\n\nexport default ExampleSlideDownFullScreen;"},{"name":"ExampleSlideLeftFullScreen","description":"Slide left full screen menu animation.","code":"import React from 'react';\nimport EZNavMobile from 'EZHeader/EZNavMobile';\n\n/** Slide left full screen menu animation. */\nclass ExampleSlideDownFullScreen extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            toggled: false\n        };\n    }\n\n    toggle() {\n        this.setState(prevState => {\n            return { toggled: !prevState.toggled };\n        })\n    }\n\n    render() {\n        const zIndex = this.state.toggled ? 2000 : 0;\n        const btnMsg = this.state.toggled ? 'Hide menu!' : 'Show menu!';\n\n        return (\n            <div>\n                <button style = {{position: 'relative', zIndex}}onClick={this.toggle.bind(this)}>{btnMsg}</button>\n                <EZNavMobile animation={'slide-left-full'} isToggled={ this.state.toggled }/>\n            </div>\n        )\n    }\n}\n\nexport default ExampleSlideDownFullScreen;"},{"name":"ExampleSlideRightFullScreen","description":"Slide right full screen menu animation.","code":"import React from 'react';\nimport EZNavMobile from 'EZHeader/EZNavMobile';\n\n/** Slide right full screen menu animation. */\nclass ExampleSlideDownFullScreen extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            toggled: false\n        };\n    }\n\n    toggle() {\n        this.setState(prevState => {\n            return { toggled: !prevState.toggled };\n        })\n    }\n\n    render() {\n        const zIndex = this.state.toggled ? 2000 : 0;\n        const btnMsg = this.state.toggled ? 'Hide menu!' : 'Show menu!';\n\n        return (\n            <div>\n                <button style = {{position: 'relative', zIndex}}onClick={this.toggle.bind(this)}>{btnMsg}</button>\n                <EZNavMobile animation={'slide-right-full'} isToggled={ this.state.toggled }/>\n            </div>\n        )\n    }\n}\n\nexport default ExampleSlideDownFullScreen;"},{"name":"ExampleSlideUpFullScreen","description":"Slide up full screen menu animation.","code":"import React from 'react';\nimport EZNavMobile from 'EZHeader/EZNavMobile';\n\n/** Slide up full screen menu animation. */\nclass ExampleSlideDownFullScreen extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            toggled: false\n        };\n    }\n\n    toggle() {\n        this.setState(prevState => {\n            return { toggled: !prevState.toggled };\n        })\n    }\n\n    render() {\n        const zIndex = this.state.toggled ? 2000 : 0;\n        const btnMsg = this.state.toggled ? 'Hide menu!' : 'Show menu!';\n\n        return (\n            <div>\n                <button style = {{position: 'relative', zIndex}}onClick={this.toggle.bind(this)}>{btnMsg}</button>\n                <EZNavMobile animation={'slide-up-full'} isToggled={ this.state.toggled }/>\n            </div>\n        )\n    }\n}\n\nexport default ExampleSlideDownFullScreen;"}]}]