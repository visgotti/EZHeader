import React from 'react';
import PropTypes from 'prop-types';

require('./EZHeaderColumn.sass');

/** Column that will hold header items */
function EZHeaderColumn({ width, children }) {
    return (
        <div style={{ width }} className="ez-header-column">
            { children }
        </div>
    );
}

EZHeaderColumn.propTypes = {
    /** width of how much you want the column to take of the parent row. */
    width: PropTypes.string.isRequired,

    /** the header elements you want to place. can also be another row. */
    children: PropTypes.element.isRequired,
};

export default EZHeaderColumn;
