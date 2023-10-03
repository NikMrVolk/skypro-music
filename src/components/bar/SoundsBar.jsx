import SoundsPlayer from './SoundsPlayer'
import SoundsVolume from './SoundsVolume'
import * as S from '../../styles/bar'
import * as SC from '../../styles/common'

const SoundsBar = () => {
	return (
		<S.BarWrapper>
			<SC.Flex $column>
				<S.BarPlayerProgress />
				<SC.Flex $h="73px" $row $jstSB>
					<SoundsPlayer />
					<SoundsVolume />
				</SC.Flex>
			</SC.Flex>
		</S.BarWrapper>
	)
}

export default SoundsBar
