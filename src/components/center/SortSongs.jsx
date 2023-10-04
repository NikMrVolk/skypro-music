import { useState } from 'react'
import SortItem from './SortItem'
import * as SC from '../../styles/common'

const SortSongs = ({ optionsArr, sortButtons }) => {
	const [isVisible, setIsVisible] = useState({ author: false, year: false, genre: false })
	// Массив optionsArr сделан для проверки скрола и будет заменён в дальнейшем
	// Скрол работает при количестве элементов 6ти и более

	return (
		<SC.Flex $mB='51px' $row $alignC>
			<SC.Block $mR='15px'>Искать по:</SC.Block>
			{sortButtons.map((sort) => (
				<SortItem
					key={sort.title}
					{...sort}
					options={optionsArr}
					isVisible={isVisible}
					setIsVisible={setIsVisible}
				/>
			))}
		</SC.Flex>
	)
}

export default SortSongs
