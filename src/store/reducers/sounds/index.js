import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	displayedPlaylist: [],
	choosedPlaylist: [],
	shuffledPlaylist: [],
	song: {},
	sortElements: { author: [], release_date: ['По умолчанию'], genre: [] },
	searchValue: '',
	isSongLiked: false,
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
		setSortElements(state, action) {
			const key = action.payload.key
			if (key === 'release_date') {
				state.sortElements[key] = new Array(action.payload.value)
			} else {
				if (state.sortElements[key].includes(action.payload.value)) {
					const index = state.sortElements[key].findIndex((el) => el === action.payload.value)
					state.sortElements[key].splice(index, 1)
				} else {
					state.sortElements[key].push(action.payload.value)
				}
			}
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setIsSongLiked(state, action) {
			state.isSongLiked = action.payload
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

export const {
	setDisplayedPlaylist,
	setChoosedPlaylist,
	setSong,
	setPlaying,
	setShuffledPlaylist,
	setIsShuffle,
	setIsSongLiked,
	setSortElements,
	setSearchValue,
} = soundsSlice.actions
export default soundsSlice.reducer
