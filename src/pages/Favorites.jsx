import { useDispatch } from 'react-redux'
import CenterSubtitle from '../components/center/CenterSubtitle'
import SortSongs from '../components/center/SortSongs'
import SongsList from '../components/center/SongsList'
import { useGetAllFavoritesQuery } from '../services/sounds/SoundsService'
import { setFavorites } from '../store/reducers/sounds'
import SearchSongs from '../components/center/SearchSongs'

const Favorites = () => {
	const { data, isLoading, error, isSuccess } = useGetAllFavoritesQuery(localStorage.getItem('access'))
	const dispatch = useDispatch()

	if (isSuccess) dispatch(setFavorites(data))

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>Мои треки</CenterSubtitle>
			<SortSongs />
			<SongsList data={data} isLoading={isLoading} error={error} />
		</>
	)
}

export default Favorites
