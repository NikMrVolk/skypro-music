import * as SC from '../../styles/common'
import { LOGIN_ROUTE } from '../../utils/constants'

const NavMenuItem = (props) => {
	const logOut = () => {
		if (props.path === LOGIN_ROUTE) {
			localStorage.removeItem('user')
		}
	}
	return (
		<SC.Li $p="5px 0" $mB="16px">
			<SC.LinkComponent $color="#ffffff" to={props.path} onClick={logOut}>
				{props.children}
			</SC.LinkComponent>
		</SC.Li>
	)
}

export default NavMenuItem
