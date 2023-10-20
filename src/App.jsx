import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppRoutes from './components/routes/AppRoutes'
import './styles/App.css'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	)
}

export default App
