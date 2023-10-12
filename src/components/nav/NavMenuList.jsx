import NavMenuItem from './NavMenuItem'
import * as SC from '../../styles/common'

const NavMenuList = ({ data, isNavbarActive }) => {
	return (
		<>
			{isNavbarActive && (
				<SC.Ul $p='18px 0 10px 0'>
					{data.map(({ title, path }) => (
						<NavMenuItem key={title} path={path}>{title}</NavMenuItem>
					))}
				</SC.Ul>
			)}
		</>
	)
}

export default NavMenuList
