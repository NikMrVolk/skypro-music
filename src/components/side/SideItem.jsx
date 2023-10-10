import * as SC from '../../styles/common'

const SideItem = ({ src, alt }) => {
	return (
		<SC.Wrapper $h="150px" $w="250px" $mBNotLC="30px">
			<SC.Link $h="100%" $w="100%" $disp='block' href="#">
				<SC.Img $h="auto" $w="100%" src={src} alt={alt} />
			</SC.Link>
		</SC.Wrapper>
	)
}

export default SideItem
