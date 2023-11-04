import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	displayedPlaylist: [],
	choosedPlaylist: [],
	shuffledPlaylist: [],
	song: {},
	playing: false,
	isShuffle: false,
}

const soundsSlice = createSlice({
	name: 'Sounds',
	initialState,
	reducers: {
		setDisplayedPlaylist(state, action) {
			state.displayedPlaylist = action.payload
		},
		setChoosedPlaylist(state, action) {
			state.choosedPlaylist = action.payload
		},

		setSong(state, action) {
			state.choosedPlaylist = state.displayedPlaylist
			state.song = state.choosedPlaylist.filter((el) => el.id === action.payload)[0]
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

export const { setDisplayedPlaylist, setChoosedPlaylist, setSong, setPlaying, setShuffledPlaylist, setIsShuffle } =
	soundsSlice.actions
export default soundsSlice.reducer
