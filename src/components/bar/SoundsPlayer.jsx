import SoundLike from './SoundLike'
import SoundTrack from './SoundTrack'
import SoundsControls from './SoundsControls'
import BarSkilet from '../skilet/BarSkilet'
import * as SC from '../../styles/common'

const SoundsPlayer = ({ isLoading, data }) => {
	return (
		<SC.Flex $row $jstFS $alignC>
			<SoundsControls />
			<SC.Flex $row $jstSB $gap="20px">
				{isLoading ? <BarSkilet /> : <SoundTrack {...data} />}
				<SoundLike />
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsPlayer
