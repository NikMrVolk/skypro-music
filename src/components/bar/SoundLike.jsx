import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import * as SC from '../../styles/common'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../services/sounds/SoundsService'
import { useRefreshMutation } from '../../services/user/UserService'
import { LOGIN_ROUTE } from '../../utils/constants'
import { setIsSongLiked } from '../../store/reducers/sounds'

const SoundLike = () => {
	const dispatch = useDispatch()
	const { song, isSongLiked } = useSelector((state) => state.songs)

	//Change after fix favorite page
	const [requestData, setRequestData] = useState({})
	const navigate = useNavigate()

	const [add, addResponse] = useAddFavoriteMutation()
	const [remove, removeResponse] = useRemoveFavoriteMutation()
	const [refresh, refreshResponse] = useRefreshMutation()

	if (addResponse?.error?.status === 401 || removeResponse?.error?.status === 401) {
		refresh({ refresh: localStorage.getItem('refresh') })

		const id = addResponse?.originalArgs?.id || removeResponse?.originalArgs?.id
		const whatIsRequest = addResponse.endpointName ? 'add' : 'remove'
		setRequestData({ id, whatIsRequest })

		addResponse.reset()
		removeResponse.reset()
	}

	if (refreshResponse.isSuccess) {
		const token = refreshResponse.data.access
		const dataToRequest = { id: requestData.id, token }
		localStorage.setItem('access', token)

		if (requestData.whatIsRequest === 'add') add(dataToRequest)
		if (requestData.whatIsRequest === 'remove') remove(dataToRequest)
		refreshResponse.reset()
	}

	if (refreshResponse.isError) {
		dispatch(setIsSongLiked(!isSongLiked))
		navigate(LOGIN_ROUTE)
	}

	const likeOrDis = () => {
		const token = localStorage.getItem('access')
		const data = { token, id: song.id }

		dispatch(setIsSongLiked(!isSongLiked))
		if (isSongLiked) return remove(data)
		add(data)
	}

	return (
		<SC.Flex $alignC>
			<SC.Wrapper $p="5px" onClick={likeOrDis}>
				{isSongLiked ? (
					<SC.Svg $h="12px" $w="14px" $fill="#B672FF" $stroke="#fff" className="_btn-icon" alt="like">
						<use xlinkHref="../img/icon/sprite.svg#icon-dislike" />
					</SC.Svg>
				) : (
					<SC.Svg $h="12px" $w="14px" $fill="none" $stroke="#fff" className="_btn-icon" alt="dislike">
						<use xlinkHref="../img/icon/sprite.svg#icon-like" />
					</SC.Svg>
				)}
			</SC.Wrapper>
		</SC.Flex>
	)
}

export default SoundLike
