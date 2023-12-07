// Track.js
import { useState } from 'react';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Track = ({ track, onPlay }) => {
  const [canPlay, setCanPlay] = useState(false);
  const storedValue = localStorage.getItem('trackListens');
  const parsedValue = parseInt(storedValue, 10);
  const trackListens = isNaN(parsedValue) ? 0 : parsedValue;

  const [trackListensState, setTrackListensState] = useState(trackListens);


  function modifyTrackListens() {

    setTrackListensState(prevTrackListensState => {
      const updatedValue = prevTrackListensState + 1;
      console.log(updatedValue);
      localStorage.setItem('trackListens', updatedValue.toString());
      return updatedValue;
    });
  }

  return (
    <div className="container">
      <div className="track">
        <div className="row">
          <div className="col">Title: {track.name}</div>
          <div className="col">Artist: {track.artist}</div>
          <div className="col">{track.duration}</div>
        </div>
        { <button onClick={() => {
        onPlay(track.id);
        setCanPlay(!canPlay); // Toggle canPlay state
      }}>
         Play
      </button>}
        <div>Listens: {trackListensState}</div>

        <AudioPlayer
          autoPlay={canPlay}
          src={track.audioUrl}
          onPlay={(e) => console.log('onPlay')}
          onPause={(e) => console.log('onPause')}
          onEnded={(e) => modifyTrackListens()}
          style={{ visibility: 'hidden', pointerEvents: 'none' }}
        // other props here
        />
      </div>
    </div>

  );
};

export default Track;
