import * as SC from '../../styles/common'

const SideItem = ({ src, alt }) => {
	return (
		<SC.Wrapper $height="150px" $width="250px" $mBNotLC="30px">
			<SC.Link $height="100%" $width="100%" $dB href="#">
				<SC.Img $height="auto" $width="100%" src={src} alt={alt} />
			</SC.Link>
		</SC.Wrapper>
	)
}

export default SideItem
