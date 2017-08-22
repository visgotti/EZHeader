import React from 'react';
import PropTypes from 'prop-types';

/** Nav to contain NavItems*/

function EZNav({children}){

    return (
        <ul className = "ez-nav">
            { children }
        </ul>
    )
}

EZNav.propTypes = {

}

EZNav.defaultProps = {

};

export default EZNav;