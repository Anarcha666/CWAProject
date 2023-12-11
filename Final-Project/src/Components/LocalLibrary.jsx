// LocalLibrary.jsx
import { useState } from "react";
import Track from "./Track";
import trackData from "./trackData";
import H5AudioPlayer from "react-h5-audio-player";

const LocalLibrary = () => {
	const [tracks, setTracks] = useState(trackData);
	const [currentTrack, setCurrentTrack] = useState(tracks[0]);

	function modifyTrackListens(id) {
		const storedValue = localStorage.getItem(`trackListens-${id}`);
		const parsedValue = parseInt(storedValue, 10);
		const trackListens = isNaN(parsedValue) ? 0 : parsedValue;
		const updatedValue = trackListens + 1;
		localStorage.setItem(`trackListens-${id}`, updatedValue.toString());
	}

	const handlePlay = (id, increment = false) => {
		const selectedTrack = tracks.find((track) => track.id === id);
		if (currentTrack.id === selectedTrack.id) {
			setCurrentTrack(selectedTrack); // force a re-render
		}
		setCurrentTrack(selectedTrack);
		if (increment) {
			modifyTrackListens(id);
		}
	};

	return (
		<div className="text-center">
			<div className="container">
				<h2>Local Library</h2>
				<div className="row">
					<div className="col">
						{tracks.map((track) => (
							<Track key={track.id} track={track} onPlay={handlePlay} />
						))}
					</div>
				</div>
				{currentTrack && (
					<H5AudioPlayer
						src={currentTrack.audioUrl}
						onEnded={(e) => handlePlay(currentTrack.id, true)}
					/>
				)}
			</div>
		</div>
	);
};

export default LocalLibrary;
