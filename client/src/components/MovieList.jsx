import React from 'react';
import Movie from './Movie.jsx';

const MovieList = ({movies, toggleWatched}) => {

// console.log(movies)

 return (
  <div className="video-list">
    {movies.map((movie,index) =>
      <Movie
        movie={movie}
        key={index}
        toggleWatched = {toggleWatched}
      />
    )}
  </div>
);

};

export default MovieList;