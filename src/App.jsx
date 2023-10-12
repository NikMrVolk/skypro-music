import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingContext } from './context/LoadingContext'
import AppRoutes from './components/routes/AppRoutes'
import './styles/App.css'

function App() {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			<div className="App">
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</div>
		</LoadingContext.Provider>
	)
}

export default App
