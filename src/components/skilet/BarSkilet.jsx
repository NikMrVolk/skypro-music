import * as S from '../../styles/skilet'

const BarSkilet = () => {
	return (
		<S.SkiletWrapper $h="51px" $w="122px" $dF $gap="12px">
			<S.SkiletItem $h="51px" $w="51px"></S.SkiletItem>
			<S.SkiletWrapper $dF $column $jstSA>
				<S.SkiletItem $h="15px" $w="59px"></S.SkiletItem>
				<S.SkiletItem $h="15px" $w="59px"></S.SkiletItem>
			</S.SkiletWrapper>
		</S.SkiletWrapper>
	)
}

export default BarSkilet
