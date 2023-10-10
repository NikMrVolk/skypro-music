import NavMenuList from './NavMenuList'
import * as SC from '../../styles/common'

const NavMenu = ({ data, isNavbarActive }) => {
	return (
		<SC.Block $disp="block" $vis="visible">
			<NavMenuList data={data} isNavbarActive={isNavbarActive} />
		</SC.Block>
	)
}

export default NavMenu
