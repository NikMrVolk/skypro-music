import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: {},
	password: '',
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
	},
})

export const { setUser, removeUser, setPassword } = userSlice.actions
export default userSlice.reducer
