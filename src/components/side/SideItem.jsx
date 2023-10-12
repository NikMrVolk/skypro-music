import { useNavigate } from 'react-router'
import * as SC from '../../styles/common'
import { CATEGORY_ROUTE } from '../../utils/constants'

const SideItem = ({ src, alt, id }) => {
	const navigate = useNavigate()

	return (
		<SC.Wrapper
			$h="150px"
			$w="250px"
			$mBNotLC="30px"
			onClick={() => navigate(`${CATEGORY_ROUTE}/${id}`)}
		>
			<SC.LinkA $h="100%" $w="100%" $disp="block">
				<SC.Img $h="auto" $w="100%" src={src} alt={alt} />
			</SC.LinkA>
		</SC.Wrapper>
	)
}

export default SideItem
