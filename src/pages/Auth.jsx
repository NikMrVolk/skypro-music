import AuthForm from '../components/auth/AuthForm'
import * as SC from '../styles/common'

const Auth = () => {
	return (
		<SC.Wrapper $minH="100%" $w="100%" $overflow="hidden">
			<SC.Wrapper $h="100vh" $m="0 auto" $position="relative" $backCol="rgba(0, 0, 0, 0.85)">
				<SC.Absolute
					$z="2"
					$left="calc(50% - (366px / 2))"
					$top="calc(50% - (439px / 2))"
					$opacity="1"
				>
					<AuthForm />
				</SC.Absolute>
			</SC.Wrapper>
		</SC.Wrapper>
	)
}

export default Auth
