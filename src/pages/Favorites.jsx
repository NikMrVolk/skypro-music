import { useDispatch } from 'react-redux'
import CenterSubtitle from '../components/center/CenterSubtitle'
import SongsList from '../components/center/SongsList'
import {
	useAddFavoriteMutation,
	useGetAllFavoritesQuery,
	useRemoveFavoriteMutation,
} from '../services/sounds/SoundsService'
import { setFavorites } from '../store/reducers/sounds'
import SearchSongs from '../components/center/SearchSongs'

const Favorites = () => {
	const { data, isLoading, error, isSuccess } = useGetAllFavoritesQuery(localStorage.getItem('access'))
	const dispatch = useDispatch()

	if (isSuccess) dispatch(setFavorites(data))

	const [add, addData] = useAddFavoriteMutation()
	const [remove, removeData] = useRemoveFavoriteMutation()

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>Мои треки</CenterSubtitle>
			<SongsList data={data} isLoading={isLoading} error={error} add={add} remove={remove} />
		</>
	)
}

export default Favorites
