import React, { useState } from 'react';

const AddMovie = ({ addedMovie }) => {
  const [movie, setMovie] = useState('');

  const handleAddMovie = () => {
    if (movie.trim() !== '') {
      addedMovie(movie);
      setMovie('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={movie}
        onChange={(event) => setMovie(event.target.value)}
        placeholder="Add a new movie"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
