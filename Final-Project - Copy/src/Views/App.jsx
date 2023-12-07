import React, { useState } from 'react';
import '../App.css';

import LocalLibrary from '../Components/LocalLibrary';
import SpotifySearch from '../Components/SpotifySearch';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'local-library':
        return <LocalLibrary goBack={() => setCurrentPage('home')} />;
      case 'spotify-search':
        return <SpotifySearch goBack={() => setCurrentPage('home')} />;
      default:
        return (
          <div>
            <h1>Pulse Haven App</h1>
            <div className="row">
              <div className="col">
                <button onClick={() => setCurrentPage('local-library')}>Local Library</button>
                <p>Browse a selection of music made by our team</p>
              </div>
              <div className="col">
                <button onClick={() => setCurrentPage('spotify-search')}>Spotify Search</button>
                <p>Search online music using the Spotify API</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
