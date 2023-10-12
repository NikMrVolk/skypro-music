import { useContext } from 'react'
import SoundLike from './SoundLike'
import SoundTrack from './SoundTrack'
import SoundsControls from './SoundsControls'
import BarSkilet from '../skilet/BarSkilet'
import { SoundsContext } from '../../context/SoundsContext'
import * as SC from '../../styles/common'

const SoundsPlayer = () => {
	const { isLoading } = useContext(SoundsContext)

	return (
		<SC.Flex $row $jstFS $alignC>
			<SoundsControls />
			<SC.Flex $row>
				{isLoading ? <BarSkilet /> : <SoundTrack />}
				<SoundLike />
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsPlayer
