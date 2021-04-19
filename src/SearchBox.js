import React from 'react';
import './searchbox.css';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div>

        <input 
        className='pa2 ba b--green bg-light-blue'
        type="search" 
        placeholder="searchBox"
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;