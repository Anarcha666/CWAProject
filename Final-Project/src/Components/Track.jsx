// Track.js
import { useState, useEffect } from 'react';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Track = ({ track, onPlay }) => {
  const [listens, setListens] = useState(0);

  useEffect(() => {
    const storedValue = localStorage.getItem(`trackListens-${track.id}`);
    const parsedValue = parseInt(storedValue, 10);
    const trackListens = isNaN(parsedValue) ? 0 : parsedValue;
    setListens(trackListens);
  }, [track.id]);

  return (
    <div className="container">
      <div className="track">
        <div className="row">
          <div className="col">Title: {track.name}</div>
          <div className="col">Artist: {track.artist}</div>
          <div className="col">{track.duration}</div>
        </div>
        {<button onClick={() => {
          onPlay(track.id);

        }}>
          Play
        </button>}
        <div>Listens: {listens}</div>


      </div>
    </div>

  );
};

export default Track;
