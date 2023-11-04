import SideList from './SideList'
import SidePerson from './SidePerson'
import { MAIN_ROUTE } from '../../utils/constants'
import * as SC from '../../styles/common'
import { useLocation } from 'react-router'

const SideBar = () => {
	const location = useLocation()
	const isMain = location.pathname === MAIN_ROUTE

	return (
		<SC.Wrapper $p="20px 90px 20px 78px" $maxW="418px">
			<SidePerson />
			{isMain && <SideList />}
		</SC.Wrapper>
	)
}

export default SideBar
