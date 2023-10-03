import * as SC from '../../styles/common'

const Logo = (props) => {
	return (
		<SC.Wrapper
			$h={props.hWr}
			$w={props.wWr}
			$p={props.pWr}
			$backCol="transparent"
			$mB={props.mB}
		>
			<SC.Img $h={props.hImg} $w={props.wImg} $color="#181818" src={props.src} alt="logo" />
		</SC.Wrapper>
	)
}

export default Logo
