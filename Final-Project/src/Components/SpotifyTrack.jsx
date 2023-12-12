import React from 'react'

function SpotifyTrack(track) {

    console.log(track)
  return (
    <div>
<div className="container" >
    <div className="row">
    <div className="col">Title: {track.track.name}</div>
    <div className="col">Artist: {track.track.artists[0].name}</div>
    <div className="col">{track.track.duration}</div>

   <div className="col">
    <a href={track.track.preview_url}> 
    <button>Preview</button> 
    </a>
    </div>
   <div className="col">
    <a href={track.track.external_urls.spotify}>
    <button >Open in Spotify</button> 
    </a>
    </div>
   </div>
</div>

    </div>
  )
}

export default SpotifyTrack