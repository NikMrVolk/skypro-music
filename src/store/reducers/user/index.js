import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: {},
	needRefresh: false,
}

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload
		},
		setNeedRefresh(state, action) {
			state.needRefresh = action.payload
		},
	},
})

export const { setUser, setNeedRefresh } = userSlice.actions
export default userSlice.reducer
