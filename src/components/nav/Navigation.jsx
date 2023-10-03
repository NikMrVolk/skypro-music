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
			<Logo
				hWr="43px"
				wWr="113.33px"
				pWr="13px 0 13px 0"
				mB="20px"
				hImg="17px"
				wImg="113.33px"
				src="/img/logo.png"
			/>
			<MyBurger onClick={handleNavbar} />
			<NavMenu data={data} isNavbarActive={isNavbarActive} />
		</S.Nav>
	)
}

export default Navigation
