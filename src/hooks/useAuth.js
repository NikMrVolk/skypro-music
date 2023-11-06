import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { MAIN_ROUTE } from '../utils/constants'
import { AuthContext } from '../context/AuthContext'
import { useGetTokensMutation, useLoginMutation, useRegistrationMutation } from '../services/user/UserService'
import {  setUser } from '../store/reducers/user'

export const useAuth = (value, isLogin) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { setUserDataWithContext } = useContext(AuthContext)
	const user = {
		email: value.email,
		password: value.password,
	}

	const [
		registration,
		{ data: regData, isLoading: regIsLoading, error: regError, isSuccess: regIsSuccess, reset: regReset },
	] = useRegistrationMutation()

	const [
		login,
		{ data: logData, isLoading: logIsLoading, error: logError, isSuccess: logIsSuccess, reset: logReset },
	] = useLoginMutation()

	const [getToken, tokens] = useGetTokensMutation()

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
		const user = {
			email: value.email,
			password: value.password,
		}

		localStorage.setItem('user', JSON.stringify(regData || logData))
		setUserDataWithContext(regData || logData)
		dispatch(setUser(regData || logData))

		regReset()
		logReset()
		getToken(user)
	}

	if (tokens.isSuccess) {
		localStorage.setItem('refresh', tokens.data.refresh)
		localStorage.setItem('access', tokens.data.access)

		navigate(MAIN_ROUTE)
	}

	return [regLog, regIsLoading, logIsLoading]
}
