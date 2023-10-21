import * as SC from '../../styles/common'
import PlayPause from './PlayPause'

const SoundsControls = ({ audioPlayer, isLoop, setIsLoop }) => {
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
			<SC.Flex
				$m="0 23px 0 0"
				$p="5px"
				$alignC
				className="_btn"
				onClick={() => {
					alert('Еще не реализовано')
				}}
			>
				<SC.Svg $h="14px" $w="15px" alt="prev">
					<use xlinkHref="img/icon/sprite.svg#icon-prev" />
				</SC.Svg>
			</SC.Flex>
			<PlayPause audioPlayer={audioPlayer} />
			<SC.Flex
				$m="0 28px 0 0"
				$p="5px"
				$alignC
				className="_btn"
				onClick={() => {
					alert('Еще не реализовано')
				}}
			>
				<SC.Svg $h="14px" $w="15px" fill="inherit" stroke="#d9d9d9" alt="next">
					<use xlinkHref="img/icon/sprite.svg#icon-next" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex
				$point="pointer"
				$m="0 24px 0 0"
				$p="5px"
				$alignC
				className={isLoop ? '' : '_btn-icon'}
				onClick={loop}
			>
				<SC.Svg
					$h="12px"
					$w="18px"
					fill={isLoop ? 'transparent' : 'transparent'}
					stroke={isLoop ? '#ffffff' : '#696969'}
					alt="next"
				>
					<use xlinkHref="img/icon/sprite.svg#icon-repeat" />
				</SC.Svg>
			</SC.Flex>
			<SC.Flex
				$p="5px"
				$alignC
				className="_btn-icon"
				onClick={() => {
					alert('Еще не реализовано')
				}}
			>
				<SC.Svg $h="12px" $w="19px" fill="transparent" stroke="#696969" alt="shuffle">
					<use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
				</SC.Svg>
			</SC.Flex>
		</SC.Flex>
	)
}

export default SoundsControls
