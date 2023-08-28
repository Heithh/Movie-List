import MovieList from './MovieList.jsx';
import React from 'react';

const Movie = ({movie, toggleWatched}) => {
//  console.log(movie)

  return(

    <div className="movie-entry-container">
      <span className="movie-entry">{movie.title}</span>
      <button className="watch-button" onClick={() => toggleWatched(movie)}>{movie.watched ? 'Watched' : 'Not Watched'}</button>
    </div>
  )


};

export default Movie;