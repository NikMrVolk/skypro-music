import * as S from '../../../../styles/auth'

const LoginButton = (props) => {
	return <S.LoginButton {...props} onClick={props.onClick}>{props.children}</S.LoginButton>
}

export default LoginButton
