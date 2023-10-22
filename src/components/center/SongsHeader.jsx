import * as SC from '../../styles/common'

const SongsHeader = () => {
	return (
		<SC.Flex $row $jstSB $mB="24px">
			<SC.Block
				$w="447px"
				$fSz="14px"
				$lH="25px"
				$lSpace="2px"
				$color="#696969"
				$tTransf="uppercase"
			>
				Трек
			</SC.Block>
			<SC.Block
				$w="321px"
				$fSz="14px"
				$lH="25px"
				$lSpace="2px"
				$color="#696969"
				$tTransf="uppercase"
			>
				Исполнитель
			</SC.Block>
			<SC.Block
				$w="245px"
				$fSz="14px"
				$lH="25px"
				$lSpace="2px"
				$color="#696969"
				$tTransf="uppercase"
			>
				Альбом
			</SC.Block>
			<SC.Block
				$w="60px"
				$fSz="14px"
				$lH="25px"
				$lSpace="2px"
				$color="#696969"
				$tTransf="uppercase"
				$tAlign="end"
				$p="0 17px 0 0"
			>
				<SC.Svg $h="12px" $w="12px" $fill="transparent" $stroke="#696969" alt="time">
					<use xlinkHref="img/icon/sprite.svg#icon-watch" />
				</SC.Svg>
			</SC.Block>
		</SC.Flex>
	)
}

export default SongsHeader
