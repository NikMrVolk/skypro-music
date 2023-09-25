import { useState } from 'react'
import SortItem from './SortItem'

const SortSongs = ({optionsArr, sortButtons}) => {
	const [isVisible, setIsVisible] = useState({ author: false, year: false, genre: false })
	// Массив optionsArr сделан для проверки скрола и будет заменён в дальнейшем
	// Скрол работает при количестве элементов 6ти и более

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
