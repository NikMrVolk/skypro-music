import { Route, Routes } from 'react-router'
import { publicRoutes, privateRoutes } from '../../routes/routes'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<ProtectedRoute isAllowed={!!localStorage.getItem('user')} />}>
				{privateRoutes.map((r) => (
					<Route key={r.path} element={r.element} path={r.path} />
				))}
			</Route>
			{publicRoutes.map((r) => (
				<Route key={r.path} element={r.element} path={r.path} />
			))}
		</Routes>
	)
}

export default AppRoutes
