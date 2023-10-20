import * as SC from '../../styles/common'

const SoundTrack = ({name, author}) => {
	return (
		<SC.Grid $w="auto" $gridTempCol="auto 1fr" $alignC>
			<SC.Flex
				$h="51px"
				$w="51px"
				$backCol="#313131"
				$alignC
				$jstC
				$m="0 12px 0 0"
				$gridArea="image"
				$gridRow="1"
				$gridRowSpan="2"
				$gridColumn="1"
			>
				<SC.Svg $w="18px" $h="17px" $fill="transparent" $stroke="#4e4e4e" alt="music">
					<use xlinkHref="img/icon/sprite.svg#icon-note" />
				</SC.Svg>
			</SC.Flex>
			<SC.GridItem $mW="49px" $gridArea="album" $gridRow="1" $gridColumn="2">
				<SC.LinkA $color="#ffffff" $wSpace="nowrap" href="#">
					{author}
				</SC.LinkA>
			</SC.GridItem>
			<SC.GridItem $mW="49px" $gridArea="author" $gridRow="2" $gridColumn="2">
				<SC.LinkA $fSz="13px" $color="#ffffff" href="#">
					{name}
				</SC.LinkA>
			</SC.GridItem>
		</SC.Grid>
	)
}

export default SoundTrack
