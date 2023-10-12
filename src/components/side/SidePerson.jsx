import { useNavigate } from 'react-router'
import * as SC from '../../styles/common'

const SidePerson = () => {
	const navigate = useNavigate()

	const logOut = () => {
		navigate('/login')
		localStorage.removeItem('user')
	}

	return (
		<SC.Flex $p="12px 0 15px 0" $jstFE $alignC>
			<SC.P $mR="16px">Sergey.Ivanov</SC.P>
			<SC.Wrapper
				$h="43px"
				$w="43px"
				$point="pointer"
				$backCol="#313131"
				$brRad="50%"
				onClick={logOut}
			>
				<SC.Svg alt="logout" $h="43px" $w="43px">
					<use xlinkHref="img/icon/sprite.svg#logout" />
				</SC.Svg>
			</SC.Wrapper>
		</SC.Flex>
	)
}

export default SidePerson
