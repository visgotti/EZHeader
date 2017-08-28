import React from 'react';
import PropTypes from 'prop-types';

require('./EZHeaderRow.sass');

/** Nav to contain NavItems */

function EZHeaderRow({ height, children }) {
    return (
        <div style={{ height }} className="ez-header-row">
            { children }
        </div>
    );
}

EZHeaderRow.propTypes = {
    /** Height of the row in the header in a valid CSS measurement */
    height: PropTypes.string.isRequired,

    /** Columns in the row, the widths of the columns need to add to 100% */
    children: PropTypes.element.isRequired,
};

export default EZHeaderRow;
