import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Logo from '../logo/Logo'
import LoginInput from '../UI/inputes/login/LoginInput'
import LoginButton from '..//UI/buttons/login/LoginButton'
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants'
import { useRegistrationOrLogin } from '../../hooks/user/useRegistrationOrLogin'
import * as S from '../../styles/auth'
import { AuthContext } from '../../context/AuthContext'

const AuthForm = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const navigate = useNavigate()
	const [value, setValue] = useState({ username: '', email: '', password: '', secondPassword: '' })
	const [regOrLogMut] = useRegistrationOrLogin(isLogin)
	const { setUser } = useContext(AuthContext)

	const handleChange = (e, name) => {
		setValue({ ...value, [name]: e.target.value })
	}
	const regLog = () => {
		if ((!value.username || !value.email || !value.password) && !isLogin) {
			toast('Заполните имя пользователя, почту или пароль')
			return
		}
		if (value.password !== value.secondPassword && !isLogin) {
			toast('Пароли не совпадают')
			return
		}
		if ((!value.email || !value.password) && isLogin) {
			toast('Заполните почту или пароль')
			return
		}

		if (isLogin) {
			regOrLogMut.mutate({
				email: value.email,
				password: value.password,
			})
			return
		} else {
			regOrLogMut.mutate({
				username: value.username,
				email: value.email,
				password: value.password,
			})
		}
	}

	if (regOrLogMut.isError && !isLogin) {
		toast(regOrLogMut.error.response.data.email[0])
		regOrLogMut.reset()
	}

	if (regOrLogMut.isError && isLogin) {
		toast(regOrLogMut.error.response.data.detail)
		regOrLogMut.reset()
	}

	if (regOrLogMut.isSuccess) {
		setUser(regOrLogMut.data)
		localStorage.setItem('user', JSON.stringify(regOrLogMut.data))
		regOrLogMut.reset()
		navigate(MAIN_ROUTE)
	}

	return (
		<S.Form onSubmit={(e) => e.preventDefault()}>
			<Logo
				hWr="21px"
				wWr="140px"
				pWr="0"
				mB="34px"
				hImg="auto"
				wImg="140px"
				src="/img/logo_modal.png"
			/>
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
				disabled={regOrLogMut.isLoading}
				$dis={regOrLogMut.isLoading}
			>
				{!isLogin ? 'Зарегистрироваться' : 'Войти'}
			</LoginButton>
			<LoginButton
				onClick={() => {
					if (isLogin) navigate(REGISTRATION_ROUTE)
					if (!isLogin) navigate(LOGIN_ROUTE)
				}}
				disabled={regOrLogMut.isLoading}
				$dis={regOrLogMut.isLoading}
			>
				{!isLogin ? 'Войти' : 'Зарегистрироваться'}
			</LoginButton>
		</S.Form>
	)
}

export default AuthForm
