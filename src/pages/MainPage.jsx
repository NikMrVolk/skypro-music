import { useDispatch } from 'react-redux'
import { useGetAllSoundsQuery } from '../services/sounds/SoundsService'
import { setDisplayedPlaylist } from '../store/reducers/sounds'
import CenterSubtitle from '../components/center/CenterSubtitle'
import SortSongs from '../components/center/SortSongs'
import SongsList from '../components/center/SongsList'
import SearchSongs from '../components/center/SearchSongs'

const MainPage = () => {
	const { data, isLoading, error, isSuccess } = useGetAllSoundsQuery()
	const dispatch = useDispatch()

	if (isSuccess) dispatch(setDisplayedPlaylist(data))

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>Треки</CenterSubtitle>
			<SortSongs />
			<SongsList data={data} isLoading={isLoading} error={error} />
		</>
	)
}

export default MainPage
