import { useSelector } from 'react-redux'
import * as SC from '../../styles/common'
import PlayPause from './PlayPause'

const SoundsControls = ({ audioPlayer, isLoop, setIsLoop, playNext, playPrevious, shuffle }) => {
	const { isShuffle } = useSelector((state) => state.songs)

	const loop = () => {
		if (isLoop) {
			setIsLoop(false)
			audioPlayer.loop = false
		} else {
			setIsLoop(true)
			audioPlayer.loop = true
		}
	}

	return (
		<SC.Flex $p="0 27px 0 31px">
			<SC.Flex $m="0 23px 0 0" $p="5px" $alignC className="_btn" onClick={playPrevious}>
				<SC.Svg $h="14px" $w="15px" alt="prev">
					<use xlinkHref="../img/icon/sprite.svg#icon-prev" />
				</SC.Svg>
			</SC.Flex>
			<PlayPause audioPlayer={audioPlayer} />
			<SC.Flex $m="0 28px 0 0" $p="5px" $alignC className="_btn" onClick={playNext}>
				<SC.Svg $h="14px" $w="15px" fill="inherit" stroke="#d9d9d9" alt="next">
					<use xlinkHref="../img/icon/sprite.svg#icon-next" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex
				$point="pointer"
				$m="0 24px 0 0"
				$p="5px"
				$alignC
				onClick={loop}
				className={isLoop ? '' : '_btn-icon'}
			>
				<SC.Svg
					$h="12px"
					$w="18px"
					fill={isLoop ? 'transparent' : 'transparent'}
					stroke={isLoop ? '#ffffff' : '#696969'}
					alt="next"
				>
					<use xlinkHref="../img/icon/sprite.svg#icon-repeat" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex $p="5px" $alignC $point="pointer" onClick={shuffle} className={isShuffle ? '' : '_btn-icon'}>
				<SC.Svg
					$h="12px"
					$w="19px"
					fill={isShuffle ? 'transparent' : 'transparent'}
					stroke={isShuffle ? '#ffffff' : '#696969'}
					alt="shuffle"
				>
					<use xlinkHref="../img/icon/sprite.svg#icon-shuffle" />
				</SC.Svg>
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsControls
