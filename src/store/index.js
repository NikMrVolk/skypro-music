import { configureStore } from '@reduxjs/toolkit'
import { soundsApi } from '../services/sounds/SoundsService'
import soundsSlice from './reducers/sounds/index'
import userSlice from './reducers/user/index'

export const store = configureStore({
	reducer: {
		[soundsApi.reducerPath]: soundsApi.reducer,
		songs: soundsSlice,
		user: userSlice,
	},

	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(soundsApi.middleware),
})
