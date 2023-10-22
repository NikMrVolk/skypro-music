import * as S from '../../../../styles/auth'

const LoginInput = (props) => {
	return (
		<S.LoginInput
			{...props}
			onChange={(e) => {
				props.change(e, props.name)
			}}
		/>
	)
}

export default LoginInput
