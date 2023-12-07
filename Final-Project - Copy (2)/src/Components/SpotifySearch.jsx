import React from 'react';

const SpotifySearch = ({ goBack }) => {
  return (
    <div>
      <h2>Spotify Search</h2>
      <button onClick={goBack}>Back to App</button>
    </div>
  );
};

export default SpotifySearch;