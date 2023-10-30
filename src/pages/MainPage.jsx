import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../context/AuthContext'
import {
	useAddFavoriteMutation,
	useGetAllSoundsQuery,
	useRemoveFavoriteMutation,
} from '../services/sounds/SoundsService'
import { setPlaylist } from '../store/reducers/sounds'
import CenterSubtitle from '../components/center/CenterSubtitle'
import SortSongs from '../components/center/SortSongs'
import SongsList from '../components/center/SongsList'
import SearchSongs from '../components/center/SearchSongs'

const MainPage = () => {
	const { data, isLoading, error, isSuccess } = useGetAllSoundsQuery()
	const dispatch = useDispatch()

	const [add, addData] = useAddFavoriteMutation()
	const [remove, removeData] = useRemoveFavoriteMutation()

	if (isSuccess) dispatch(setPlaylist(data))

	return (
		<>
			<SearchSongs />
			<CenterSubtitle>Треки</CenterSubtitle>
			<SortSongs />
			<SongsList data={data} isLoading={isLoading} error={error} add={add} remove={remove} />
		</>
	)
}

export default MainPage
