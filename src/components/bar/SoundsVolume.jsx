import * as SC from '../../styles/common'
import VolumeInput from '../UI/inputes/volume/VolumeInput'

const SoundsVolume = () => {
	return (
		<SC.Flex $padding="0 92px 0 0" $alignC>
			<SC.Flex $padding="0 27px 0 31px" $row>
				<SC.Wrapper $h="18px" $w="13px" $margin="0 17px 0 0">
					<SC.Svg $h="18px" $w="13px" $fill="transparent" alt="volume">
						<use xlinkHref="img/icon/sprite.svg#icon-volume" />
					</SC.Svg>
				</SC.Wrapper>
				<SC.Wrapper $w="109px" className="_btn">
					<VolumeInput $w="109px" className="_btn" />
				</SC.Wrapper>
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsVolume
