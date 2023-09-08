import SideList from './SideList'
import SidePerson from './SidePerson'

const SideBar = ({ props }) => {
	return (
		<div className="main__sidebar sidebar">
			<SidePerson />
			<SideList />
		</div>
	)
}

export default SideBar
