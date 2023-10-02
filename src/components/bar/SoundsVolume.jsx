import * as SC from '../../styles/common'

const SoundsVolume = () => {
	return (
		<SC.Flex $padding="0 92px 0 0" $alignC>
			<SC.Flex $padding="0 27px 0 31px" $row>
				<SC.Wrapper $height="18px" $width="13px" $margin="0 17px 0 0">
					<SC.Svg $height="18px" $width="13px" alt="volume">
						<use xlinkHref="img/icon/sprite.svg#icon-volume" />
					</SC.Svg>
				</SC.Wrapper>
				<SC.Wrapper $width="109px" className="_btn">
					<SC.Input $width="109px" className="_btn" type="range" name="range" />
				</SC.Wrapper>
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsVolume
