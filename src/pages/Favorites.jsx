import CenterSubtitle from '../components/center/CenterSubtitle'
import SongsList from '../components/center/SongsList'
import SearchSongs from '../components/center/SearchSongs'
import { useFavorites } from '../hooks/useFavorites'

const Favorites = () => {
	const [data, isLoading, error] = useFavorites(localStorage.getItem('access'))

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>Мои треки</CenterSubtitle>
			<SongsList data={data} isLoading={isLoading} error={error} />
		</>
	)
}

export default Favorites
