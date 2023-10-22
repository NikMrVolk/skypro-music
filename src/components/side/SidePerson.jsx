import { useNavigate } from 'react-router'
import * as SC from '../../styles/common'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const SidePerson = () => {
	const { user } = useContext(AuthContext)
	const navigate = useNavigate()

	const logOut = () => {
		navigate('/login')
		localStorage.removeItem('user')
	}

	return (
		<SC.Flex $p="12px 0 15px 0" $jstFE $alignC>
			<SC.P $mR="16px">{user.username}</SC.P>
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
