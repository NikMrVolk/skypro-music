import * as S from '../../../../styles/auth'

const LoginButton = (props) => {
	return <S.LoginButton {...props}>{props.children}</S.LoginButton>
}

export default LoginButton
