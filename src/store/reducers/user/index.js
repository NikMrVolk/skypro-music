import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: {},
	password: '',
	needRefresh: false,
}

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload
		},
		removeUser(state) {
			state.user = {}
		},
		setPassword(state, action) {
			state.password = action.payload
		},
		setNeedRefresh(state, action) {
			state.needRefresh = action.payload
		},
	},
})

export const { setUser, removeUser, setPassword, setNeedRefresh } = userSlice.actions
export default userSlice.reducer
