import NavMenuList from './NavMenuList'
import * as S from '../../styles/nav'

const NavMenu = ({ data, isNavbarActive }) => {
	return (
		<S.NavMenu>
			<NavMenuList data={data} isNavbarActive={isNavbarActive} />
		</S.NavMenu>
	)
}

export default NavMenu
