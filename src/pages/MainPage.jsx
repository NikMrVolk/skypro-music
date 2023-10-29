import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../context/AuthContext'
import { useGetAllSoundsQuery } from '../services/sounds/SoundsService'
import { setPlaylist } from '../store/reducers/sounds'
import CenterSubtitle from '../components/center/CenterSubtitle'
import SortSongs from '../components/center/SortSongs'
import SongsList from '../components/center/SongsList'
import SearchSongs from '../components/center/SearchSongs'

const MainPage = () => {
	const { setUserDataWithContext } = useContext(AuthContext)
	const { data, isLoading, error, isSuccess } = useGetAllSoundsQuery()
	const dispatch = useDispatch()

	if (isSuccess) dispatch(setPlaylist(data))

	useEffect(() => {
		if (!!localStorage.getItem('user')) {
			setUserDataWithContext(JSON.parse(localStorage.getItem('user')))
		}
	}, [])

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
