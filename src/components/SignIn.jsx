import { useState } from 'react'
import '../styles/signin.css'
import Logo from './Logo'
import * as SC from '../styles/common'
import * as S from '../styles/auth'
import LoginInput from './UI/inputes/login/LoginInput'
import LoginButton from './UI/buttons/login/LoginButton'

const SignIn = () => {
	const [userExist, setUserExist] = useState(false)

	return (
		<SC.Wrapper $minH="100%" $w="100%" $overflow="hidden">
			<SC.Wrapper $h="100vh" $m="0 auto" $position="relative" $backCol="rgba(0, 0, 0, 0.85)">
				<SC.Absolute
					$z="2"
					$left="calc(50% - (366px / 2))"
					$top="calc(50% - (439px / 2))"
					$opacity="1"
				>
					<S.Form action="#">
						<a href="../">
							<Logo
								hWr="21px"
								wWr="140px"
								pWr="0"
								mB="34px"
								hImg="auto"
								wImg="140px"
								src="/img/logo_modal.png"
							/>
						</a>
						<LoginInput $mB="30px" type="text" name="login" placeholder="Почта" />
						<LoginInput
							$mB={!userExist && '30px'}
							type="password"
							name="password"
							placeholder="Пароль"
						/>
						{!userExist && (
							<LoginInput
								type="password"
								name="secondPassword"
								placeholder="Повторите пароль"
							/>
						)}
						<LoginButton $black $mT="60px" $mB="20px">
							{!userExist ? 'Зарегистрироваться' : 'Войти'}
						</LoginButton>
						{userExist && <LoginButton>Зарегистрироваться</LoginButton>}
					</S.Form>
				</SC.Absolute>
			</SC.Wrapper>
		</SC.Wrapper>
	)
}

export default SignIn
