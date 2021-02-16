// HEADER.JS

import React, { Fragment } from 'react';
import './Header.css';
import Card from '../Card/Card';

//destruct props
const Header = ({ searchMovie, query, setQuery, movies }) => {
    return (
        <Fragment>
            <div class="header">
                <h1 class="title">Movie-search</h1>

                {/* Search form */}

                <div className="search">
                    <form className="search-form" onSubmit={searchMovie}>
                        <label
                            htmlFor="query"
                            className="name"
                        >
                        </label> 
                        {/* <p>text input</p> */}
                        <input 
                            type="text"
                            name="query"  
                            placeholder="i.e Guardians of the Galaxy Vol. 2"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        /> 
                        {/* <p>text button</p> */}
                        <button type="submit">Search</button>   
                    </form>
                </div>
            </div>

            {/* Card component */}

            <div className="list-movie">
                <Card movies={movies} />
            </div>
        </Fragment>
    )
}

export default Header;