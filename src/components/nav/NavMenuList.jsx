import NavMenuItem from './NavMenuItem'
import * as S from '../../styles/nav'

const NavMenuList = ({ data, isNavbarActive }) => {
	return (
		<>
			{isNavbarActive && (
				<S.NavMenuList>
					{data.map(({ title }) => (
						<NavMenuItem key={title}>{title}</NavMenuItem>
					))}
				</S.NavMenuList>
			)}
		</>
	)
}

export default NavMenuList
