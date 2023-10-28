import { configureStore } from '@reduxjs/toolkit'
import { soundsApi } from '../services/sounds/SoundsService'
import soundsSlice from './reducers/sounds/index'

export const store = configureStore({
	reducer: {
		[soundsApi.reducerPath]: soundsApi.reducer,
		songs: soundsSlice,
	},

	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(soundsApi.middleware),
})
