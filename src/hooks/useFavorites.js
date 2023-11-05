import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useGetAllFavoritesQuery } from '../services/sounds/SoundsService'
import { useRefreshMutation } from '../services/user/UserService'
import { setDisplayedPlaylist } from '../store/reducers/sounds'
import { LOGIN_ROUTE } from '../utils/constants'
import { setNeedRefresh } from '../store/reducers/user'

export const useFavorites = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { needRefresh } = useSelector((state) => state.user)
	const { data, isLoading, error, isSuccess } = useGetAllFavoritesQuery(localStorage.getItem('access'))

	const [refresh, refreshResponse] = useRefreshMutation()

	if (isSuccess) dispatch(setDisplayedPlaylist(data))

	if (needRefresh) {
		refresh({ refresh: localStorage.getItem('refresh') })
		dispatch(setNeedRefresh(false))
	}

	if (refreshResponse.isSuccess) {
		localStorage.setItem('access', refreshResponse.data.access)
		refreshResponse.reset()
	}

	if (refreshResponse.isError) navigate(LOGIN_ROUTE)

	return [data, isLoading, error]
}
