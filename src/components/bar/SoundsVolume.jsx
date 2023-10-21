import * as SC from '../../styles/common'
import VolumeInput from '../UI/inputes/volume/VolumeInput'

const SoundsVolume = ({ volume, change }) => {
	return (
		<SC.Flex $p="0 92px 0 0" $alignC>
			<SC.Flex $p="0 27px 0 31px" $row>
				<SC.Wrapper $h="18px" $w="13px" $m="0 17px 0 0">
					<SC.Svg $h="18px" $w="13px" $fill="transparent" alt="volume">
						<use xlinkHref="img/icon/sprite.svg#icon-volume" />
					</SC.Svg>
				</SC.Wrapper>
				<SC.Wrapper $w="109px" className="_btn">
					<VolumeInput
						min={0}
						max={1}
						step={0.1}
						$w="109px"
						$color="#B672FF"
						value={volume}
						change={change}
					/>
				</SC.Wrapper>
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsVolume
