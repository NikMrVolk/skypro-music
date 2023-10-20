import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ redirectPath = '/login', isAllowed }) => {
	if (!isAllowed) return <Navigate to={redirectPath} replace={isAllowed} />
	return <Outlet />
}

export default ProtectedRoute
