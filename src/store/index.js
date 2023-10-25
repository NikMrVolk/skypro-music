import { configureStore } from '@reduxjs/toolkit'
import { soundsApi } from '../services/sounds/SoundsService'

export const store = configureStore({
	reducer: {
		[soundsApi.reducerPath]: soundsApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(soundsApi.middleware),
})
