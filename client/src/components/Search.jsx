import React, { useState } from 'react';

var Search = ({ films }) => {
  const [term, setTerm] = useState('');

  var Search = () => {
    if (term.trim() !== '') {
      films(term);
      setTerm('');
    }

  };
  return (
    <div>
      <input className="form-control" type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
      <button className="btn" onClick={Search}>
        Search
      </button>
    </div>
  );
};

export default Search;