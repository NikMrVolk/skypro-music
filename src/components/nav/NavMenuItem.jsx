const NavMenuItem = (props) => {
	return (
		<li className="menu__item">
			<a href="#" className="menu__link">
				{props.children}
			</a>
		</li>
	)
}

export default NavMenuItem
