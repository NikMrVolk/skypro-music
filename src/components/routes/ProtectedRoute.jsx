import { Navigate } from 'react-router-dom'
import MainLayout from './MainLayout'

const ProtectedRoute = ({ redirectPath = '/login', isAllowed }) => {
	if (!isAllowed) return <Navigate to={redirectPath} replace={isAllowed} />
	return <MainLayout />
}

export default ProtectedRoute
