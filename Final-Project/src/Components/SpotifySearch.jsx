import React from 'react';
import SpotifyTrack from './SpotifyTrack';

const SpotifySearch  = ({ goBack }) => {
  return (
    <div className="container">
      <h2>Spotify Search</h2>
      <div className="row">
        <div className="col-8">
          <div className="input-group mb-3">
            <input type="search" className="form-control" placeholder="Search Spotify" />
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-primary" >Search</button>
        
        </div>
      </div>
      <div className="row">
      <SpotifyTrack />
      </div>
    </div>
  );
};

export default SpotifySearch;