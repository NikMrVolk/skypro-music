import SideList from './SideList'
import SidePerson from './SidePerson'
import * as SC from '../../styles/common'

const SideBar = () => {
	return (
		<SC.Wrapper $p="20px 90px 20px 78px" $maxW="418px">
			<SidePerson />
			<SideList />
		</SC.Wrapper>
	)
}

export default SideBar
