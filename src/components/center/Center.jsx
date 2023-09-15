import SearchSongs from './SearchSongs'
import SongsList from './SongsList'
import SortSongs from './SortSongs'

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
			style: 'button-author',
			keyValue: 'author',
		},
		{
			title: 'году выпуска',
			style: 'button-year',
			keyValue: 'year',
		},
		{
			title: 'жанру',
			style: 'button-genre',
			keyValue: 'genre',
		},
	]

	return (
		<div className="main__centerblock centerblock">
			<SearchSongs />
			<h2 className="centerblock__h2">Треки</h2>
			<SortSongs optionsArr={optionsArr} sortButtons={sortButtons}/>
			<SongsList />
		</div>
	)
}

export default Center
