import SearchSongs from './SearchSongs'
import SongsList from './SongsList'
import SortSongs from './SortSongs'
import CenterSubtitle from './CenterSubtitle'
import * as SC from '../../styles/common'

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
		<SC.Block $w="auto" $fGrow="3" $p="20px 40px 20px 50px">
			<SearchSongs />
			<CenterSubtitle>Треки</CenterSubtitle>
			<SortSongs optionsArr={optionsArr} sortButtons={sortButtons} />
			<SongsList />
		</SC.Block>
	)
}

export default Center
