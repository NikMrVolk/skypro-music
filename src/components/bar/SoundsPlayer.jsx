import { useContext } from 'react'
import SoundLike from './SoundLike'
import SoundTrack from './SoundTrack'
import SoundsControls from './SoundsControls'
import { LoadingContext } from '../../context/LoadingContext'
import BarSkilet from '../skilet/BarSkilet'

const SoundsPlayer = () => {
	const { isLoading } = useContext(LoadingContext)
	return (
		<div className="bar__player player">
			<SoundsControls />
			<div className="player__track-play track-play">
				{isLoading ? <BarSkilet /> : <SoundTrack />}
				<SoundLike />
			</div>
		</div>
	)
}

export default SoundsPlayer
