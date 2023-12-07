// Track.js
import { useState } from 'react';
import React  from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Track = ({ track, onPlay }) => {
  const [canPlay, setCanPlay] = useState(false);
  
  const [trackListens, setTrackListens] = useState(0);


  return (
    <div className="track">
      <p>{track.name}</p>
      <p>{track.artist}</p>
      <p>{track.duration}</p>
      <button onClick={() => {
        onPlay(track.id);
        setCanPlay(!canPlay); // Toggle canPlay state
      }}>
        {canPlay ? 'Pause' : 'Play'}
      </button>
      <p>Listens: {track.listens}</p>
      
      <AudioPlayer
        autoPlay={canPlay}
        src={track.audioUrl}
        onPlay={(e) => console.log('onPlay')}
        onPause={(e) => console.log('onPause')}
        onEnded={(e) => console.log('onEnded')}
        // other props here
      />
    </div>
  );
};

export default Track;
