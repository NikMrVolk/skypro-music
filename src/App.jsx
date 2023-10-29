import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { AuthContext } from './context/AuthContext'
import AppRoutes from './components/routes/AppRoutes'
import { store } from './store'
import './styles/App.css'

function App() {
	const [user, setUser] = useState(false)

	return (
		<Provider store={store}>
			<AuthContext.Provider value={{ user, setUser }}>
				<div className="App">
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</div>
				<ToastContainer
					position="top-center"
					autoClose={3000}
					hideProgressBar
					limit={1}
				/>
			</AuthContext.Provider>
		</Provider>
	)
}

export default App
