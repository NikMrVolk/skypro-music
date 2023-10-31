import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as SC from '../../styles/common'
import DurationTime from './DurationTime'
import { setSong, setWhatIsPlaylist } from '../../store/reducers/sounds'
import { TrackBubble } from '../../styles/trackBubble'
import { AuthContext } from '../../context/AuthContext'
import { useLocation } from 'react-router'
import { FAVORITE_ROUTE, MAIN_ROUTE } from '../../utils/constants'

const SongItem = ({ id, name, subTitle, author, album, duration_in_seconds, add, remove }) => {
	const { pathname } = useLocation()
	const { song, playing, playlist } = useSelector((state) => state.songs)
	const { userDataWithContext } = useContext(AuthContext)
	const dispatch = useDispatch()
	let isLiked

	if (pathname === MAIN_ROUTE)
		isLiked = playlist
			.find((song) => song.id === id)
			?.stared_user.find((user) => user.username === userDataWithContext.username)
	if (pathname === FAVORITE_ROUTE) isLiked = true

	const play = (id) => {
		if (pathname === MAIN_ROUTE) dispatch(setWhatIsPlaylist(MAIN_ROUTE))
		if (pathname === FAVORITE_ROUTE) dispatch(setWhatIsPlaylist(FAVORITE_ROUTE))
		dispatch(setSong(id))
	}

	const like = (id) => {
		const token = localStorage.getItem('access')
		const data = { token, id }

		if (!!isLiked) return remove(data)
		add(data)
	}

	return (
		<SC.Block $w="100%" $mB="12px">
			<SC.Flex $row $jstSB $alignC>
				<SC.Flex $w="447px" $row $alignC>
					<SC.Flex $h="51px" $w="51px" $p="16px" $mR="17px" $back="#313131" $jstC $alignC onClick={play}>
						{song.id === id ? (
							<TrackBubble $active={playing} />
						) : (
							<SC.Svg $h="17px" $w="18px" $fill="transparent" $stroke="#4e4e4e" alt="music">
								<use xlinkHref="img/icon/sprite.svg#icon-note" />
							</SC.Svg>
						)}
					</SC.Flex>
					<SC.Block
						$color="#ffffff"
						$point="pointer"
						onClick={() => {
							play(id)
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
				<div>
					<SC.Svg
						$h="12px"
						$w="14px"
						$mR="17px"
						$fill={isLiked ? '#B672FF' : 'transparent'}
						$stroke={isLiked ? '#B672FF' : '#696969'}
						alt="time"
						onClick={() => {
							like(id)
						}}
					>
						<use xlinkHref="img/icon/sprite.svg#icon-like" />
					</SC.Svg>
					<DurationTime duration={duration_in_seconds} />
				</div>
			</SC.Flex>
		</SC.Block>
	)
}

export default SongItem
