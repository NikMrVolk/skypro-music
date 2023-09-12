import { useState } from 'react'
import SortItem from './SortItem'

const SortSongs = () => {
	const [isVisible, setIsVisible] = useState({ author: false, year: false, genre: false })
	// Массив optionsArr сделан для проверки скрола и будет заменён в дальнейшем
	// Скрол работает при количестве более 5ти элементов
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
		<div className="centerblock__filter filter">
			<div className="filter__title">Искать по:</div>
			{sortButtons.map((sort) => (
				<SortItem
					key={sort.title}
					{...sort}
					options={optionsArr}
					isVisible={isVisible}
					setIsVisible={setIsVisible}
				/>
			))}
		</div>
	)
}

export default SortSongs
