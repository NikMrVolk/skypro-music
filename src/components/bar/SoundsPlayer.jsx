import SoundLike from './SoundLike'
import SoundTrack from './SoundTrack'
import SoundsControls from './SoundsControls'
import BarSkilet from '../skilet/BarSkilet'
import * as SC from '../../styles/common'

const SoundsPlayer = ({ isLoading, data, audioPlayer, isLoop, setIsLoop, playNext, playPrevious, shuffle }) => {
	return (
		<SC.Flex $row $jstFS $alignC>
			<SoundsControls
				audioPlayer={audioPlayer}
				isLoop={isLoop}
				setIsLoop={setIsLoop}
				playNext={playNext}
				playPrevious={playPrevious}
				shuffle={shuffle}
			/>
			<SC.Flex $row $jstSB $gap="20px">
				{isLoading ? <BarSkilet /> : <SoundTrack {...data} />}
				<SoundLike />
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsPlayer
