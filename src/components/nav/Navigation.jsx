import Logo from '../Logo'
import NavMenu from './NavMenu'

const Navigation = () => {
	return (
		<div>
			<nav className="main__nav nav">
				<Logo/>
				<div className="nav__burger burger">
					<span className="burger__line" />
					<span className="burger__line" />
					<span className="burger__line" />
				</div>
				<NavMenu />
			</nav>
		</div>
	)
}

export default Navigation
