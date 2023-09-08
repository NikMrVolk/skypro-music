import SoundLike from './SoundLike'
import SoundTrack from './SoundTrack'
import SoundsControls from './SoundsControls'

const SoundsPlayer = ({ props }) => {
	return (
		<div className="bar__player player">
			<SoundsControls />
			<div className="player__track-play track-play">
				<SoundTrack />
				<SoundLike />
			</div>
		</div>
	)
}

export default SoundsPlayer
