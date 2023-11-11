import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useLogOut } from '../../hooks/useLogOut'
import * as SC from '../../styles/common'

const SidePerson = () => {
	const { userDataWithContext } = useContext(AuthContext)
	const logOut = useLogOut()

	return (
		<SC.Flex $p="12px 0 15px 0" $jstFE $alignC>
			<SC.P $mR="16px">{userDataWithContext?.username}</SC.P>
			<SC.Wrapper $h="43px" $w="43px" $point="pointer" $backCol="#313131" $brRad="50%" onClick={logOut}>
				<SC.Svg alt="logout" $h="43px" $w="43px">
					<use xlinkHref="../img/icon/sprite.svg#logout" />
				</SC.Svg>
			</SC.Wrapper>
		</SC.Flex>
	)
}

export default SidePerson
