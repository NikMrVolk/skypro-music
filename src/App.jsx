import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { LoadingContext } from './context/LoadingContext'
import AppRoutes from './components/routes/AppRoutes'
import './styles/App.css'

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const queryClient = new QueryClient()

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			<QueryClientProvider client={queryClient}>
				<div className="App">
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</div>
			</QueryClientProvider>
		</LoadingContext.Provider>
	)
}

export default App
