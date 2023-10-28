import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	playlist: [],
	song: {},
	playing: false,
}

const soundsSlice = createSlice({
	name: 'Sounds',
	initialState,
	reducers: {
		setPlaylist(state, action) {
			state.playlist = action.payload
		},
		setSong(state, action) {
			state.song = state.playlist.filter((el) => el.id === action.payload)[0]
		},
		setPlaying(state) {
			state.playing = !state.playing
		},
	},
})

export const { setPlaylist, setSong, setPlaying } = soundsSlice.actions
export default soundsSlice.reducer
