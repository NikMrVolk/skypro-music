import SearchSongs from './SearchSongs'
import SongsList from './SongsList'
import SortSongs from './SortSongs'
import CenterSubtitle from './CenterSubtitle'
import * as S from '../../styles/center'

const Center = () => {
	const optionsArr = [
		{ value: '1', name: 'Linkin Park' },
		{ value: '2', name: 'Linkin Park' },
		{ value: '3', name: 'Linkin Park' },
		// { value: '4', name: 'Linkin Park' },
		// { value: '5', name: 'Linkin Park' },
		// { value: '6', name: 'Linkin Park' },
		// { value: '7', name: 'Linkin Park' },
		// { value: '8', name: 'Linkin Park' },
	]
	const sortButtons = [
		{
			title: 'исполнителю',
			keyValue: 'author',
		},
		{
			title: 'году выпуска',
			keyValue: 'year',
		},
		{
			title: 'жанру',
			keyValue: 'genre',
		},
	]

	return (
		<S.Center>
			<SearchSongs />
			<CenterSubtitle>Треки</CenterSubtitle>
			<SortSongs optionsArr={optionsArr} sortButtons={sortButtons} />
			<SongsList />
		</S.Center>
	)
}

export default Center
