import * as SC from '../../styles/common'

const NavMenuItem = (props) => {
	return (
		<SC.Li $p='5px 0' $mB='16px'>
			<SC.Link $color='#ffffff' href="#">{props.children}</SC.Link>
		</SC.Li>
	)
}

export default NavMenuItem
