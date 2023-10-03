import { useState } from 'react'
import HomePage from '../src/pages/HomePage'
import './styles/App.css'
import { LoadingContext } from './context/LoadingContext'

function App() {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			<div className="App">
				<HomePage />
			</div>
		</LoadingContext.Provider>
	)
}

export default App
