import { useState } from 'react'
import Auth from '../src/pages/Auth'
import './styles/App.css'
import { LoadingContext } from './context/LoadingContext'

function App() {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			<div className="App">
				<Auth />
			</div>
		</LoadingContext.Provider>
	)
}

export default App
