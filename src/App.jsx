import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoutes from './components/routes/AppRoutes'
import { store } from './store'
import { AuthContext } from './context/AuthContext'

function App() {
	const [userDataWithContext, setUserDataWithContext] = useState({})

	useEffect(() => {
		if (!!localStorage.getItem('user')) {
			setUserDataWithContext(JSON.parse(localStorage.getItem('user')))
		}
	}, [])

	return (
		<Provider store={store}>
			<AuthContext.Provider value={{ userDataWithContext, setUserDataWithContext }}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
				<ToastContainer position="top-center" autoClose={3000} hideProgressBar limit={1} />
			</AuthContext.Provider>
		</Provider>
	)
}

export default App
