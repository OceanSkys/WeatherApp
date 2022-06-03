import React from 'react';

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();

    }

    
    return (
        <form onSubmit={handleSubmit} className='searchbar'>
            <h1 className='citysearch'>Search Your City</h1>
            <input
                className='searchbarinput'
                value={props.value}
                onChange={(event) => props.setLocationKey(event.target.value)}
                placeholder='ex: Los Angeles, CA '
                type='text'       
            >
            </input>
            <button className='submit' type="submit">
                <span class="material-symbols-outlined">
                    arrow_forward
                </span>
            </button>
        </form>
    );
};

export default SearchBar;