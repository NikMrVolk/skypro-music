import * as SC from '../styles/common'

const Logo = () => {
	return (
		<SC.Wrapper
			$height="43px"
			$w="113.33px"
			$padding="13px 0 13px 0"
			$backCol="transparent"
			$mB="20px"
		>
			<SC.Img $height="17px" $w="113.33px" $color="#181818" src="img/logo.png" alt="logo" />
		</SC.Wrapper>
	)
}

export default Logo
