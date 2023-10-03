import { useContext } from 'react'
import SideItem from './SideItem'
import SideSkilet from '../skilet/SideSkilet'
import { LoadingContext } from '../../context/LoadingContext'
import * as SC from '../../styles/common'

const SideList = () => {
	const data = [
		{ id: 1, src: 'img/side/playlist01.png', alt: `day's playlist` },
		{ id: 2, src: 'img/side/playlist02.png', alt: `day's playlist` },
		{ id: 3, src: 'img/side/playlist03.png', alt: `day's playlist` },
	]

	const { isLoading } = useContext(LoadingContext)

	return (
		<SC.Flex $h="100%" $padding="240px 0 0 0" $column $jstFS>
			<SC.Flex $column $alignC>
				{data.map((sideBar) =>
					isLoading ? (
						<SideSkilet key={sideBar.id} />
					) : (
						<SideItem key={sideBar.id} {...sideBar} />
					)
				)}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SideList
