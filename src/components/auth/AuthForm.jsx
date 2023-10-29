import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import Logo from '../logo/Logo'
import LoginInput from '../UI/inputes/login/LoginInput'
import LoginButton from '..//UI/buttons/login/LoginButton'
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants'
import { useLoginMutation, useRegistrationMutation } from '../../services/user/UserService'
import * as S from '../../styles/auth'
import { setPassword, setUser } from '../../store/reducers/user'
import { AuthContext } from '../../context/AuthContext'

const AuthForm = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const navigate = useNavigate()
	const [value, setValue] = useState({
		username: '',
		email: '',
		password: '',
		secondPassword: '',
	})
	const dispatch = useDispatch()
	const { setUserDataWithContext } = useContext(AuthContext)

	const [
		registration,
		{ data: regData, isLoading: regIsLoading, error: regError, isSuccess: regIsSuccess, reset: regReset },
	] = useRegistrationMutation()

	const [
		login,
		{ data: logData, isLoading: logIsLoading, error: logError, isSuccess: logIsSuccess, reset: logReset },
	] = useLoginMutation()

	const handleChange = (e, name) => {
		setValue({ ...value, [name]: e.target.value })
	}

	const regLog = () => {
		const user = {
			email: value.email,
			password: value.password,
		}

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
			login(user)
			return
		} else {
			registration({ ...user, username: value.username })
		}
	}

	if (regError) {
		const errorData = regError.data?.username ?? regError.data?.email ?? regError.data?.password
		toast(errorData[0])
		regReset()
	}

	if (logError) {
		const errorData = logError.data.detail
		toast(errorData)
		logReset()
	}

	if (regIsSuccess || logIsSuccess) {
		localStorage.setItem('user', JSON.stringify(regData || logData))
		regReset()
		logReset()
		setUserDataWithContext(regData || logData)
		dispatch(setUser(regData || logData))
		dispatch(setPassword(value.password))
		navigate(MAIN_ROUTE)
	}

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
