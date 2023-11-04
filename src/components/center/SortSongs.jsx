import { useState } from 'react'
import SortItem from './SortItem'
import * as SC from '../../styles/common'
import { sortButtons } from '../../data/sortElements'

const SortSongs = () => {
	const [isVisible, setIsVisible] = useState({ author: false, year: false, genre: false })


	return (
		<SC.Flex $mB='51px' $row $alignC>
			<SC.Block $mR='15px'>Искать по:</SC.Block>
			{sortButtons.map((sort) => (
				<SortItem
					key={sort.title}
					{...sort}
					isVisible={isVisible}
					setIsVisible={setIsVisible}
				/>
			))}
		</SC.Flex>
	)
}

export default SortSongs
