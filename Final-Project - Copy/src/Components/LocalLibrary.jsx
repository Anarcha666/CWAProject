// LocalLibrary.jsx
import React, { useState } from 'react';
import Track from './Track';
import trackData from './trackData';

const LocalLibrary = () => {
	const [tracks, setTracks] = useState(trackData);

	const handlePlay = (id) => {
		setTracks((prevTracks) =>
			prevTracks.map((track) =>
				track.id === id ? { ...track, listens: track.listens + 1 } : track
			)
		);
		// Play the audio for the selected track
	
	};

	return (
		<div>
			<h2>Local Library</h2>
			<div>
				{tracks.map((track) => (
					<Track key={track.id} track={track} onPlay={handlePlay} />
				))}
			</div>
		</div>
	);
};

export default LocalLibrary;