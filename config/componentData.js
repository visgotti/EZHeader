module.exports = /* eslint-disable */ [{"name":"EZHamburger","description":"Hamburger menu toggle","props":{"onClick":{"type":{"name":"func"},"required":true,"description":"Logic that gets ran when the hamburger is clicked"},"active":{"type":{"name":"bool"},"required":false,"description":"If the Hamburger Button is toggled/active or not.","defaultValue":{"value":"false","computed":false}},"animation":{"type":{"name":"enum","value":[{"value":"'none'","computed":false},{"value":"'spin'","computed":false}]},"required":false,"description":"name of the animation type you want the hamburger to play","defaultValue":{"value":"'none'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nrequire('./EZHamburger.sass')\n\n\n/** Hamburger menu toggle */\n\nfunction EZHamburger({onClick, active, animation}){\n\n    let classes = active ? \"ez-hamburger ez-hamburger-active\" : \"ez-hamburger\";\n\n    // append the animation to the class name.\n    classes = classes + ' ez-hamburger-animation-' + animation;\n    return (\n        <div onClick={onClick} className={classes}>\n            <div className=\"ez-hamburger-box\">\n                <div className = \"ez-hamburger-inner\"/>\n            </div>\n        </div>\n    )\n}\n\nEZHamburger.propTypes = {\n    /** Logic that gets ran when the hamburger is clicked */\n    onClick: PropTypes.func.isRequired,\n\n    /** If the Hamburger Button is toggled/active or not. */\n    active: PropTypes.bool,\n\n    /** name of the animation type you want the hamburger to play */\n    animation: PropTypes.oneOf(['none', 'spin'])\n}\n\nEZHamburger.defaultProps = {\n    active: false,\n    animation: 'none'\n};\n\nexport default EZHamburger;","examples":[{"name":"ExampleSpinAnimation","description":"When toggled does spin animation","code":"import React from 'react';\nimport EZHamburger from 'EZHeader/EZHamburger';\n\n/** When toggled does spin animation */\nclass ExampleSpinAnimation extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            toggled: false\n        };\n    }\n\n    toggle() {\n        this.setState(prevState => {\n            return { toggled: !prevState.toggled };\n        })\n    }\n\n    render() {\n        return (\n            <div>\n               <EZHamburger active={this.state.toggled} animation='spin' onClick={this.toggle.bind(this)}/>\n            </div>\n        )\n    }\n}\n\nexport default ExampleSpinAnimation;"}]},{"name":"EZNavItem","description":"Hamburger menu toggle","props":{"value":{"type":{"name":"string"},"required":true,"description":"What the nav item displays."}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nrequire('./EZNavItem.sass')\n\n\n/** Hamburger menu toggle */\n\nfunction EZNavItem({value}){\n\n    return (\n        <li>\n            { value }\n        </li>\n    )\n}\n\nEZNavItem.propTypes = {\n    /** What the nav item displays. */\n    value: PropTypes.string.isRequired\n}\n\nEZNavItem.defaultProps = {\n\n};\n\nexport default EZNavItem;","examples":[]}]