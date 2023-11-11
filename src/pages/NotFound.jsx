import { useNavigate } from 'react-router'
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/constants'

const NotFound = () => {
	const navigate = useNavigate()
	if (localStorage.getItem('user')) {
		navigate(MAIN_ROUTE)
	} else {
		navigate(LOGIN_ROUTE)
	}
	return <div style={{ color: 'red', fontSize: '60px' }}>Not found</div>
}

export default NotFound
