import { useDispatch } from 'react-redux'
import { useGetAllSoundsQuery } from '../services/sounds/SoundsService'
import { setPlaylist } from '../store/reducers/sounds'
import CenterSubtitle from '../components/center/CenterSubtitle'
import SortSongs from '../components/center/SortSongs'
import SongsList from '../components/center/SongsList'
import SearchSongs from '../components/center/SearchSongs'

const MainPage = () => {
	const { data, isLoading, error, isSuccess, refetch } = useGetAllSoundsQuery()
	const dispatch = useDispatch()

	if (isSuccess) dispatch(setPlaylist(data))

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>Треки</CenterSubtitle>
			<SortSongs />
			<SongsList data={data} isLoading={isLoading} error={error} refetch={refetch} />
		</>
	)
}

export default MainPage
