import React from 'react';

const Card = ({ movies }) => {
    return (
        <div className="cardlist_movies">
            {movies.filter(movie => movie.Poster).map((movie, index) => (
                <div className="card" key={index}>
                    <img
                        className="movie_image"
                        src={movie.Poster}
                        alt="postal"
                    />
                    <div className="flex_card">
                        <p className="heading">{movie.Title}</p>
                        <p className="heading">{movie.Year}</p>
                        <br />                    
                    </div>    
                </div>
            ))}
        </div>
    )
}

export default Card;