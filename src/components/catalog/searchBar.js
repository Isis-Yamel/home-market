import React from 'react'

const SearchBar = () => {
    return (
        <label className='searchBar__container' htmlFor='search'>
            <input className='inputStyle inputStyle__searchBar' placeholder='Buscar' name='search' type='text'/>
        </label>
    );
};

export default SearchBar;