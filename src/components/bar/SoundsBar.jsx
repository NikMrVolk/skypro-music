import styled from 'styled-components'
import SoundsPlayer from './SoundsPlayer'
import SoundsVolume from './SoundsVolume'
import * as SC from '../../styles/common'

const StyledBarWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(28, 28, 28, 0.5);
`

const StyledBarPlayerProgress = styled.div`
	width: 100%;
	height: 5px;
	background: #2e2e2e;
`

const SoundsBar = () => {
	return (
		<StyledBarWrapper>
			<SC.Flex $column>
				<StyledBarPlayerProgress />
				<SC.Flex $height='73px' $row $jstSB >
					<SoundsPlayer />
					<SoundsVolume />
				</SC.Flex>
			</SC.Flex>
		</StyledBarWrapper>
	)
}

export default SoundsBar
