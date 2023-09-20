import * as S from '../../styles/nav'

const NavMenuItem = (props) => {
	return (
		<S.MenuItem>
			<S.MenuItemLink href="#">{props.children}</S.MenuItemLink>
		</S.MenuItem>
	)
}

export default NavMenuItem
