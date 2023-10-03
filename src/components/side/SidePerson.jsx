import * as SC from '../../styles/common'

const SidePerson = () => {
	return (
		<SC.Flex $padding="12px 0 15px 0" $jstFE $alignC>
			<SC.P $mR="16px">Sergey.Ivanov</SC.P>
			<SC.Wrapper $height="43px" $width="43px" $point $backCol="#313131" $brRad="50%">
				<SC.Svg alt="logout">
					<use xlinkHref="img/icon/sprite.svg#logout" />
				</SC.Svg>
			</SC.Wrapper>
		</SC.Flex>
	)
}

export default SidePerson
