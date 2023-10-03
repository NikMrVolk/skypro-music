import * as SC from '../../styles/common'
import * as ST from '../../styles/temporary'

const SoundTrack = () => {
	return (
		<SC.Grid $w="auto" $gridTempCol="auto 1fr" $alignC>
			<SC.Flex
				$h="51px"
				$w="51px"
				$backCol="#313131"
				$alignC
				$jstC
				$margin="0 12px 0 0"
				$gridArea="image"
				$gridRow="1"
				$gridRowSpan="2"
				$gridColumn="1"
			>
				<SC.Svg $w="18px" $h="17px" $fill="transparent" $stroke="#4e4e4e" alt="music">
					<use xlinkHref="img/icon/sprite.svg#icon-note" />
				</SC.Svg>
			</SC.Flex>
			<SC.GridItem $mW="49px" $gridArea="author" $gridRow="1" $gridColumn="2">
				<ST.LinkAuthor href="http://">Ты та...</ST.LinkAuthor>
			</SC.GridItem>
			<SC.GridItem $mW="49px" $gridArea="album" $gridRow="2" $gridColumn="2">
				<ST.LinkAlbum href="http://">Баста</ST.LinkAlbum>
			</SC.GridItem>
		</SC.Grid>
	)
}

export default SoundTrack
