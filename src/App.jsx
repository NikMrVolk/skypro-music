import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppRoutes from './components/routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles/App.css'
import { AuthContext } from './context/AuthContext'

function App() {
	const [user, setUser] = useState(false)
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<AuthContext.Provider value={{ user, setUser }}>
				<div className="App">
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</div>
				<ToastContainer position="top-center" autoClose={3000} hideProgressBar limit={1} />
			</AuthContext.Provider>
		</QueryClientProvider>
	)
}

export default App
