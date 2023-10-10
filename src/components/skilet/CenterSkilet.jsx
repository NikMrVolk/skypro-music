import * as S from '../../styles/skilet'

const CenterSkilet = () => {
	return (
		<S.SkiletWrapper $h="51px" $w="1107px" $dF $gap="14px" $mB="12px">
			<S.SkiletItem $h="51px" $w="51px"></S.SkiletItem>
			<S.SkiletWrapper $w="1042px" $dF $jstSB $alignC>
				<S.SkiletItem $h="19px" $w="305px"></S.SkiletItem>
				<S.SkiletItem $h="19px" $w="305px"></S.SkiletItem>
				<S.SkiletItem $h="19px" $w="305px"></S.SkiletItem>
			</S.SkiletWrapper>
		</S.SkiletWrapper>
	)
}

export default CenterSkilet
