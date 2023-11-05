import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../services/sounds/SoundsService'
import { useRefreshMutation } from '../services/user/UserService'
import { setIsSongLiked } from '../store/reducers/sounds'
import { LOGIN_ROUTE } from '../utils/constants'

export const useLike = (data) => {
	const dispatch = useDispatch()
	const { isSongLiked, song } = useSelector((state) => state.songs)

	const [requestData, setRequestData] = useState({})
	const navigate = useNavigate()

	const [add, addResponse] = useAddFavoriteMutation()
	const [remove, removeResponse] = useRemoveFavoriteMutation()
	const [refresh, refreshResponse] = useRefreshMutation()

	const like = () => {
		add(data)
	}

	const disLike = () => {
		remove(data)
	}

	if ((addResponse.isSuccess || removeResponse.isSuccess) && song.id === data.id) {
		dispatch(setIsSongLiked(!isSongLiked))
		removeResponse.reset()
		addResponse.reset()
	}

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
		if (song.id === data.id) dispatch(setIsSongLiked(!isSongLiked))
		navigate(LOGIN_ROUTE)
	}

	return [like, disLike]
}
