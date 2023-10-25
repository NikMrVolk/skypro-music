import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global } from './styles/global'
import { QueryClient, QueryClientProvider } from 'react-query'

const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()

root.render(
	<>
		<QueryClientProvider client={queryClient}>
			<Global />
			<App />
		</QueryClientProvider>
	</>
)
