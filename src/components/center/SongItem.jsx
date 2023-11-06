import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as SC from '../../styles/common'
import DurationTime from './DurationTime'
import { setIsSongLiked, setSong } from '../../store/reducers/sounds'
import { TrackBubble } from '../../styles/trackBubble'
import { AuthContext } from '../../context/AuthContext'
import { useLocation } from 'react-router'
import { FAVORITE_ROUTE } from '../../utils/constants'
import { useLike } from '../../hooks/useLike'

const SongItem = ({ id, name, subTitle, author, album, duration_in_seconds}) => {
	const { pathname } = useLocation()
	const dispatch = useDispatch()
	const { userDataWithContext } = useContext(AuthContext)

	const { song, playing, displayedPlaylist } = useSelector((state) => state.songs)
	const [like, disLike] = useLike(id)

	let isLiked

	if (pathname === FAVORITE_ROUTE) {
		isLiked = true
	} else {
		isLiked = displayedPlaylist
			.find((song) => song.id === id)
			?.stared_user.find((user) => user?.username === userDataWithContext.username)
	}

	const play = () => {
		dispatch(setSong(id))
		dispatch(setIsSongLiked(isLiked))
	}

	const likeOrDis = () => {
		if (!!isLiked) return disLike()
		like()
	}

	return (
		<SC.Block $w="100%" $mB="12px">
			<SC.Flex $row $jstSB $alignC>
				<SC.Flex $w="360px" $row $alignC>
					<SC.Flex
						$h="51px"
						$w="51px"
						$p="16px"
						$mR="17px"
						$back="#313131"
						$jstC
						$alignC
						onClick={() => {
							play()
						}}
					>
						{song.id === id ? (
							<TrackBubble $active={playing} />
						) : (
							<SC.Svg $h="17px" $w="18px" $fill="transparent" $stroke="#4e4e4e" alt="music">
								<use xlinkHref="../img/icon/sprite.svg#icon-note" />
							</SC.Svg>
						)}
					</SC.Flex>
					<SC.Block
						$color="#ffffff"
						$point="pointer"
						onClick={() => {
							play()
						}}
					>
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
				<SC.Block $w="80px">
					<SC.Svg
						$h="12px"
						$w="14px"
						$mR="17px"
						$fill={isLiked ? '#B672FF' : 'transparent'}
						$stroke={isLiked ? '#B672FF' : '#696969'}
						alt="time"
						onClick={likeOrDis}
					>
						<use xlinkHref="../img/icon/sprite.svg#icon-like" />
					</SC.Svg>
					<DurationTime duration={duration_in_seconds} />
				</SC.Block>
			</SC.Flex>
		</SC.Block>
	)
}

export default SongItem
