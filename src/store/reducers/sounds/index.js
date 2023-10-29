import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	playlist: [],
	isShuffle: false,
	shuffledPlaylist: [],
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
			state.playing = true
		},
		setPlaying(state, action) {
			state.playing = action.payload
		},
		setShuffledPlaylist(state, action) {
			state.shuffledPlaylist = action.payload
		},
		setIsShuffle(state, action) {
			state.isShuffle = action.payload
		},
	},
})

export const { setPlaylist, setSong, setPlaying, setShuffledPlaylist, setIsShuffle } = soundsSlice.actions
export default soundsSlice.reducer
