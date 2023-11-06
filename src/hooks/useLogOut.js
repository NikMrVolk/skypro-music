import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setUser } from '../store/reducers/user'
import { LOGIN_ROUTE } from '../utils/constants'

export const useLogOut = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logOut = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('access')
		localStorage.removeItem('refresh')

		navigate(LOGIN_ROUTE)
		dispatch(setUser({}))
	}

	return logOut
}
