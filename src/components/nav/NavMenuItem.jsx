import { useLogOut } from '../../hooks/useLogOut'
import * as SC from '../../styles/common'
import { LOGIN_ROUTE } from '../../utils/constants'

const NavMenuItem = (props) => {
	const logOut = useLogOut()

	const out = () => {
		if (props.path === LOGIN_ROUTE) {
			logOut()
		}
	}
	return (
		<SC.Li $p="5px 0" $mB="16px">
			<SC.LinkComponent $color="#ffffff" to={props.path} onClick={out}>
				{props.children}
			</SC.LinkComponent>
		</SC.Li>
	)
}

export default NavMenuItem
