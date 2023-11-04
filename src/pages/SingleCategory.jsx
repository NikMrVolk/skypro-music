import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import data from '../data/sideElements'
import { useGetOneSelectionQuery } from '../services/sounds/SoundsService'
import SearchSongs from '../components/center/SearchSongs'
import { CenterSubtitle } from '../styles/common'
import SongsList from '../components/center/SongsList'
import { setCategory, setDisplayedPlaylist } from '../store/reducers/sounds'

const SingleCategory = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const { data, isLoading, error, isSuccess } = useGetOneSelectionQuery(id)

	if (isSuccess) {
		dispatch(setCategory(data.items))
		dispatch(setDisplayedPlaylist(data.items))
	}

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>{data?.name}</CenterSubtitle>
			<SongsList data={data?.items} isLoading={isLoading} error={error} />
		</>
	)
}

export default SingleCategory
