import NavMenuItem from './NavMenuItem'

const NavMenu = ({ data, isNavbarActive }) => {
	return (
		<div className="nav__menu menu">
			<ul className="menu__list">
				{isNavbarActive &&
					data.map(({ title }) => <NavMenuItem key={title}>{title}</NavMenuItem>)}
			</ul>
		</div>
	)
}

export default NavMenu
