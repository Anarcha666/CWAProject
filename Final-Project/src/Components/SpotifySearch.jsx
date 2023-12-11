import { useState } from 'react';
import React from 'react';
import SpotifyTrack from './SpotifyTrack';



const SpotifySearch  = ({ goBack }) => {
const [accessToken, getAccessToken] = useState("")
const [searchTerm, setSearchTerm] = useState("")
const [tracks, setTracks] = useState({})

useState(() => {
  getToken();
})
async function getToken() {
  //let accessToken = localStorage.getItem('access_token');

  const response = await fetch('https://mywebapp-775f4.ue.r.appspot.com/spotify/token');

  const data = await response.json();
  console.log(data);
  getAccessToken(data.access_token)
}


  async function getProfile() {
    //let accessToken = localStorage.getItem('access_token');
  
    const response = await fetch(`https://api.spotify.com/v1/search?q=track:${searchTerm}&type=track`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
    setTracks(data.tracks.items);
    console.log(tracks);
  }
  return (
    <div className="container">
      <h2>Spotify Search</h2>
      <div className="row">
        <div className="col-8">
          <div className="input-group mb-3">
            <input type="search" onChange={(e)=> setSearchTerm(e.target.value)} className="form-control" placeholder="Search Spotify" />
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-primary" onClick={getProfile} >Search</button>
        
        </div>
      </div>
      <div className="row">
       {tracks.length>0 ? ( tracks.map((track) => (
        
							<SpotifyTrack key={track.id} track={track}  />
						))):
            (<p>
              No tracks availaible
            </p>)
          
          } 
      </div>
    </div>
  );
};

export default SpotifySearch;