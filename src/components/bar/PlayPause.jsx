import { useDispatch, useSelector } from 'react-redux'
import { setPlaying } from '../../store/reducers/sounds'
import * as SC from '../../styles/common'

const PlayPause = ({ audioPlayer }) => {
	const { playing } = useSelector((state) => state.songs)
	const dispatch = useDispatch()

	return (
		<>
			{playing ? (
				<SC.Flex
					$m="0 26px 0 0"
					$p="5px"
					$alignC
					className="_btn"
					onClick={() => {
						dispatch(setPlaying(false))
						audioPlayer.pause()
					}}
				>
					<SC.Svg $h="15px" $w="19px" fill="#D9D9D9" alt="stop">
						<use xlinkHref="img/icon/sprite.svg#icon-stop" />
					</SC.Svg>
				</SC.Flex>
			) : (
				<SC.Flex
					$m="0 23px 0 0"
					$p="5px"
					$alignC
					className="_btn"
					onClick={() => {
						dispatch(setPlaying(true))
						audioPlayer.play()
					}}
				>
					<SC.Svg $h="20px" $w="22px" fill="#d9d9d9" alt="play">
						<use xlinkHref="img/icon/sprite.svg#icon-play" />
					</SC.Svg>
				</SC.Flex>
			)}
		</>
	)
}

export default PlayPause
