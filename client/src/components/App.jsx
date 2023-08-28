import React, { useState, useEffect } from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';



const App = () => {
  const [movies, setMovies] = useState([]);
  //const [userMovies, setUserMovies] = useState([]);

  useEffect(() => {

    const apiKey = '455f34b16b7de92bbdac56ed5ed0f267';
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results)
        setMovies(data.results)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);




  const handleSearch = (query) => {
    if (query === '') {
      setMovies([]);
    } else {
      var results = movies.filter((vid) => vid.title.toLowerCase().includes(query.toLowerCase()));
      setMovies(results);
    }
  };

  const handleAddMovie = (movieTitle) => {
    const newMovie = { title: movieTitle, watched: false };
    setMovies([...movies, newMovie]);
  };

  const handleToggleWatched = (movieToUpdate) => {
    const updatedMovies = movies.map((movie) =>
      movie === movieToUpdate ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(updatedMovies);
  };


  return (
    <div>
      <nav className="navbar">
        <h1>Movie List</h1>
        <div className="search">
          <Search films={handleSearch} />
        </div>

        <div className="search">
          <AddMovie addedMovie={handleAddMovie} />
        </div>
      </nav>
      <div className="row">
        <div>
          {movies.length === 0 ? (
            <p>No movie by that name found.</p>
          ) : (
            <MovieList movies={movies} toggleWatched={handleToggleWatched} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;