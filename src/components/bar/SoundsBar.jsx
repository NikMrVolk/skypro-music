import SoundsPlayer from './SoundsPlayer'
import SoundsVolume from './SoundsVolume'
import * as SC from '../../styles/common'

const SoundsBar = () => {
	return (
		<SC.Absolute $w="100%" $left="0" $bottom="0" $bG="rgba(28, 28, 28, 0.5)">
			<SC.Flex $column>
				<SC.Block $h="5px" $w="100%" $bG="#2e2e2e" />
				<SC.Flex $h="73px" $row $jstSB>
					<SoundsPlayer />
					<SoundsVolume />
				</SC.Flex>
			</SC.Flex>
		</SC.Absolute>
	)
}

export default SoundsBar
