import * as SC from '../../styles/common'

const SoundsControls = () => {
	return (
		<SC.Flex $padding="0 27px 0 31px">
			<SC.Flex $margin="0 23px 0 0" $padding="5px" $alignC>
				<SC.Svg $height="14px" $width="15px" alt="prev">
					<use xlinkHref="img/icon/sprite.svg#icon-prev" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex $margin="0 23px 0 0" $padding="5px" $alignC className="_btn">
				<SC.Svg $height="20px" $width="22px" $fill="#d9d9d9" alt="play">
					<use xlinkHref="img/icon/sprite.svg#icon-play" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex $margin="0 28px 0 0" $padding="5px" $alignC>
				<SC.Svg $height="14px" $width="15px" $fill="inherit" $stroke="#d9d9d9" alt="next">
					<use xlinkHref="img/icon/sprite.svg#icon-next" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex $margin="0 24px 0 0" $padding="5px" $alignC className="_btn-icon">
				<SC.Svg $height="12px" $width="18px" $fill="transparent" $stroke="#696969" alt="repeat">
					<use xlinkHref="img/icon/sprite.svg#icon-repeat" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex $padding="5px" $alignC className="_btn-icon">
				<SC.Svg
					$height="12px"
					$width="19px"
					$fill="transparent"
					$stroke="#696969"
					alt="shuffle"
				>
					<use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
				</SC.Svg>
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsControls
