import * as SC from '../../styles/common'

const SongItem = ({ name, subTitle, author, album, duration_in_seconds }) => {
	return (
		<SC.Block $w="100%" $mB="12px">
			<SC.Flex $row $jstSB $alignC>
				<SC.Flex $w="447px" $row $alignC>
					<SC.Flex $h="51px" $w="51px" $p="16px" $mR="17px" $back="#313131" $jstC $alignC>
						<SC.Svg $h="17px" $w="18px" $fill="transparent" $stroke="#4e4e4e" alt="music">
							<use xlinkHref="img/icon/sprite.svg#icon-note" />
						</SC.Svg>
					</SC.Flex>
					<SC.Block $color="#ffffff" $point="pointer">
						{name} <SC.Span $color="#4e4e4e">{subTitle}</SC.Span>
					</SC.Block>
				</SC.Flex>
				<SC.Flex $w="321px" $jstFS>
					<SC.LinkA $color="#ffffff" href="#">
						{author}
					</SC.LinkA>
				</SC.Flex>
				<SC.Block $w="245px">
					<SC.LinkA $color="#696969" href="#">
						{album}
					</SC.LinkA>
				</SC.Block>
				<div>
					<SC.Svg
						$h="12px"
						$w="14px"
						$mR="17px"
						$fill="transparent"
						$stroke="#696969"
						alt="time"
					>
						<use xlinkHref="img/icon/sprite.svg#icon-like" />
					</SC.Svg>
					<SC.Span $color="#696969" $tAlign="right">
						{duration_in_seconds}
					</SC.Span>
				</div>
			</SC.Flex>
		</SC.Block>
	)
}

export default SongItem
