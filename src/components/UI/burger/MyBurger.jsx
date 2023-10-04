import * as SC from '../../../styles/common'

const MyBurger = ({ onClick }) => {
	return (
		<SC.Flex $h="36px" $w="20px" $p="13px 0" $column $jstSB $point onClick={onClick}>
			<SC.Span $disp="inline-block" $h="1px" $w="100%" $backCol="#d3d3d3" />
			<SC.Span $disp="inline-block" $h="1px" $w="100%" $backCol="#d3d3d3" />
			<SC.Span $disp="inline-block" $h="1px" $w="100%" $backCol="#d3d3d3" />
		</SC.Flex>
	)
}

export default MyBurger
