import SideItem from './SideItem'
import SideSkilet from '../skilet/SideSkilet'
import * as SC from '../../styles/common'
import data from '../../data/sideElements'
import { useGetAllSoundsQuery } from '../../services/sounds/SoundsService'

const SideList = () => {
	const { isLoading } = useGetAllSoundsQuery()

	return (
		<SC.Flex $h="100%" $p="240px 0 0 0" $column $jstFS>
			<SC.Flex $column $alignC>
				{data.map((sideBar) =>
					isLoading ? <SideSkilet key={sideBar.id} /> : <SideItem key={sideBar.id} {...sideBar} />
				)}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SideList
