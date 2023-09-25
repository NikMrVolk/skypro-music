import styled from 'styled-components'
import SearchSongs from './SearchSongs'
import SongsList from './SongsList'
import SortSongs from './SortSongs'
import CenterSubtitle from './CenterSubtitle'

const StyledCenter = styled.div`
	width: auto;
	-webkit-box-flex: 3;
	-ms-flex-positive: 3;
	flex-grow: 3;
	padding: 20px 40px 20px 111px;
`

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
		<StyledCenter>
			<SearchSongs />
			<CenterSubtitle>Треки</CenterSubtitle>
			<SortSongs optionsArr={optionsArr} sortButtons={sortButtons} />
			<SongsList />
		</StyledCenter>
	)
}

export default Center
