import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Logo from '../logo/Logo'
import LoginInput from '../UI/inputes/login/LoginInput'
import LoginButton from '..//UI/buttons/login/LoginButton'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants'
import * as S from '../../styles/auth'
import { useAuth } from '../../hooks/useAuth'

const AuthForm = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const isLogin = pathname === LOGIN_ROUTE
	const [value, setValue] = useState({
		username: '',
		email: '',
		password: '',
		secondPassword: '',
	})

	const handleChange = (e, name) => {
		setValue({ ...value, [name]: e.target.value })
	}

	const [regLog, regIsLoading, logIsLoading] = useAuth(value, isLogin)

	return (
		<S.Form onSubmit={(e) => e.preventDefault()}>
			<Logo hWr="21px" wWr="140px" pWr="0" mB="34px" hImg="auto" wImg="140px" src="/img/logo_modal.png" />
			{!isLogin && (
				<LoginInput
					value={value.username}
					change={handleChange}
					$mB="30px"
					type="text"
					name="username"
					placeholder="Имя пользователя"
				/>
			)}
			<LoginInput
				value={value.email}
				change={handleChange}
				type="text"
				name="email"
				placeholder="Почта"
				$mB="30px"
			/>
			<LoginInput
				value={value.password}
				change={handleChange}
				type="password"
				name="password"
				placeholder="Пароль"
			/>
			{!isLogin && (
				<LoginInput
					value={value.secondPassword}
					change={handleChange}
					type="password"
					name="secondPassword"
					placeholder="Повторите пароль"
					$mT={!isLogin && '30px'}
				/>
			)}
			<LoginButton
				$black
				$mT="60px"
				$mB="20px"
				onClick={regLog}
				disabled={regIsLoading || logIsLoading}
				$dis={regIsLoading || logIsLoading}
			>
				{!isLogin ? 'Зарегистрироваться' : 'Войти'}
			</LoginButton>
			<LoginButton
				onClick={() => {
					if (isLogin) navigate(REGISTRATION_ROUTE)
					if (!isLogin) navigate(LOGIN_ROUTE)
				}}
				disabled={regIsLoading || logIsLoading}
				$dis={regIsLoading || logIsLoading}
			>
				{!isLogin ? 'Войти' : 'Зарегистрироваться'}
			</LoginButton>
		</S.Form>
	)
}

export default AuthForm
