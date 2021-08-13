import React from 'react';

function SearchBar({ inputValue, searchOnChange, placeholder, onKeyDown }) {
        return (
                <input
                        className="input is-normal is-rounded is-primary"
                        type="text"
                        value={inputValue}
                        onChange={searchOnChange}
                        placeholder={placeholder}
                        onKeyDown={onKeyDown}
                />
        );
}

export default SearchBar;
