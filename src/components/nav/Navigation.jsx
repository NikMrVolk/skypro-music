import { useState } from 'react'
import * as S from '../../styles/nav'

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
		<S.Nav>
			<Logo />
			<MyBurger onClick={handleNavbar} />
			<NavMenu data={data} isNavbarActive={isNavbarActive} />
		</S.Nav>
	)
}

export default Navigation
