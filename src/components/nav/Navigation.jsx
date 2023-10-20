import { useState } from 'react'
import * as SC from '../../styles/common'

import Logo from '../logo/Logo'
import MyBurger from '../UI/burger/MyBurger'
import NavMenu from './NavMenu'
import { FAVORITE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../../utils/constants'

const Navigation = () => {
	const [isNavbarActive, setIsNavbarActive] = useState(false)
	// В последующем данная переменная будет хранить маршруты и вынесена в отдельный файл
	const data = [
		{ title: 'Главное', path: MAIN_ROUTE },
		{ title: 'Мой плейлист', path: FAVORITE_ROUTE },
		{ title: 'Выйти', path: LOGIN_ROUTE },
	]

	const handleNavbar = () => {
		if (isNavbarActive) {
			return setIsNavbarActive(false)
		}
		setIsNavbarActive(true)
	}

	return (
		<SC.Nav $w="244px" $p="20px 0 20px 36px" $backCol="#181818">
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
		</SC.Nav>
	)
}

export default Navigation
