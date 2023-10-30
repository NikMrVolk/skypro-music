import { useDispatch } from 'react-redux'
import CenterSubtitle from '../components/center/CenterSubtitle'
import SongsList from '../components/center/SongsList'
import { useGetAllFavoritesQuery } from '../services/sounds/SoundsService'
import { setFavorites } from '../store/reducers/sounds'
import SearchSongs from '../components/center/SearchSongs'

const Favorites = () => {
	const { data, isLoading, error, isSuccess, refetch } = useGetAllFavoritesQuery(localStorage.getItem('access'))
	const dispatch = useDispatch()

	if (isSuccess) dispatch(setFavorites(data))

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>Мои треки</CenterSubtitle>
			<SongsList data={data} isLoading={isLoading} error={error} refetch={refetch} />
		</>
	)
}

export default Favorites
