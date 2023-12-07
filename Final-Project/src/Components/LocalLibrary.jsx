// LocalLibrary.jsx
import React, { useState } from 'react';
import Track from './Track';
import trackData from './trackData';
import H5AudioPlayer from 'react-h5-audio-player';

const LocalLibrary = () => {
	const [tracks, setTracks] = useState(trackData);
	
	const [currentTrack, setCurrentTrack] = useState(tracks[0]);

	const handlePlay = (id) => {
		const selectedTrack = tracks.find(track => track.id === id);
		setCurrentTrack(selectedTrack);
		setTracks((prevTracks) =>
			prevTracks.map((track) =>
				track.id === id ? { ...track, listens: track.listens + 1 } : track
			)
		);
		// Play the audio for the selected track

	};

	return (
		<div className='text-center'>
			<div className="container">
				<h2>Local Library</h2>
				<div className="row">
					<div className="col">
						{tracks.map((track) => (
							<Track key={track.id} track={track} onPlay={() => handlePlay(track.id)} />
						))}
					</div>
				</div>
				{currentTrack && <H5AudioPlayer src={currentTrack.audioUrl} />}
			</div>

		</div>
	);
};

export default LocalLibrary;