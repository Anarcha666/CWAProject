import React from 'react'

function SpotifyTrack(track) {

    console.log(track)
  return (
    <div>
<div className="container" >
    <div className="row">
    <div className="col">Title: {track.track.name}</div>
    <div className="col">Artist: {track.artists}</div>
    <div className="col">{track.duration}</div>

   <div className="col">
    <button>Preview</button> 
    </div>
   <div className="col">
    <button>Open in Spotify</button> 
    </div>
   </div>
</div>

    </div>
  )
}

export default SpotifyTrack