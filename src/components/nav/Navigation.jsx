import Logo from '../Logo'
import MyBurger from '../UI/burger/MyBurger'
import NavMenu from './NavMenu'

const Navigation = () => {
	return (
		<div>
			<nav className="main__nav nav">
				<Logo />
				<MyBurger />
				<NavMenu />
			</nav>
		</div>
	)
}

export default Navigation
