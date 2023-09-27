import { useState } from 'react'
import SortItem from './SortItem'
import * as S from '../../styles/center'

const SortSongs = ({ optionsArr, sortButtons }) => {
	const [isVisible, setIsVisible] = useState({ author: false, year: false, genre: false })
	// Массив optionsArr сделан для проверки скрола и будет заменён в дальнейшем
	// Скрол работает при количестве элементов 6ти и более

	return (
		<S.CenterblockFilterWrapper>
			<S.CenterblockFilterTitle>Искать по:</S.CenterblockFilterTitle>
			{sortButtons.map((sort) => (
				<SortItem
					key={sort.title}
					{...sort}
					options={optionsArr}
					isVisible={isVisible}
					setIsVisible={setIsVisible}
				/>
			))}
		</S.CenterblockFilterWrapper>
	)
}

export default SortSongs
