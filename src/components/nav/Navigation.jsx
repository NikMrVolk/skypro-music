import { useState } from 'react'
import Logo from '../Logo'
import MyBurger from '../UI/burger/MyBurger'
import NavMenu from './NavMenu'

const Navigation = () => {
	const [isNavbarActive, setIsNavbarActive] = useState(false)
	// В последующем данная переменная будет хранить маршруты и вынесена в отдельный файл
	const data = [{ title: 'Главное' }, { title: 'Мой плейлист' }, { title: 'Войти' }]

	const handleNavbar = () => {
		if (isNavbarActive) {
			return setIsNavbarActive(false)
		}
		setIsNavbarActive(true)
	}

	return (
		<div>
			<nav className="main__nav nav">
				<Logo />
				<MyBurger onClick={handleNavbar} />
				<NavMenu data={data} isNavbarActive={isNavbarActive} />
			</nav>
		</div>
	)
}

export default Navigation
