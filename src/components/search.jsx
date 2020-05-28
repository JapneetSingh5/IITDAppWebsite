import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

function Search({ searchQuery, onChange }) {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search ..."
                // eslint-disable-next-line react/destructuring-assignment
                value={searchQuery}
                onChange={onChange}
            />
            <span className="search-icon">
                <Icon.Search strokeWidth="3" height="31.5" />
            </span>
        </div>
    );
}
Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Search;