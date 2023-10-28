import CenterSubtitle from '../components/center/CenterSubtitle'
import SortSongs from '../components/center/SortSongs'
import SongsList from '../components/center/SongsList'

const Favorites = () => {
	return (
		<>
			<CenterSubtitle>Мои треки</CenterSubtitle>
			<SortSongs />
			{/* <SongsList data={data} isLoading={isLoading} error={error} /> */}
		</>
	)
}

export default Favorites
