import Logo from '../logo/Logo'
import LoginInput from '../UI/inputes/login/LoginInput'
import LoginButton from '..//UI/buttons/login/LoginButton'

import * as S from '../../styles/auth'
import { useNavigate } from 'react-router'

const AuthForm = ({ login, isLogin }) => {
	const navigate = useNavigate()

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
			<LoginInput $mB="30px" type="text" name="login" placeholder="Почта" />
			<LoginInput
				$mB={!isLogin && '30px'}
				type="password"
				name="password"
				placeholder="Пароль"
			/>
			{!isLogin && (
				<LoginInput type="password" name="secondPassword" placeholder="Повторите пароль" />
			)}
			<LoginButton $black $mT="60px" $mB="20px" onClick={login}>
				{!isLogin ? 'Зарегистрироваться' : 'Войти'}
			</LoginButton>
			{isLogin && (
				<LoginButton
					onClick={(e) => {
						e.preventDefault()
						navigate('/registration')
					}}
				>
					Зарегистрироваться
				</LoginButton>
			)}
		</S.Form>
	)
}

export default AuthForm
