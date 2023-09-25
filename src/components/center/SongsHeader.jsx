import styled from 'styled-components'

const StyledPlaylistHeaderWrapper = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	margin-bottom: 24px;
`

const StyledPlaylistHeaderTitle = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 2px;
	color: #696969;
	text-transform: uppercase;
	width: ${(props) => props.$width}px;
	${(props) => props.$textEnd && 'text-align: end;'}
`

const StyledPlaylistHeaderSvg = styled.svg`
	width: 12px;
	height: 12px;
	fill: transparent;
	stroke: #696969;
`

const SongsHeader = () => {
	return (
		<StyledPlaylistHeaderWrapper>
			<StyledPlaylistHeaderTitle $width={'447'}>Трек</StyledPlaylistHeaderTitle>
			<StyledPlaylistHeaderTitle $width={'321'}>ИСПОЛНИТЕЛЬ</StyledPlaylistHeaderTitle>
			<StyledPlaylistHeaderTitle $width={'245'}>АЛЬБОМ</StyledPlaylistHeaderTitle>
			<StyledPlaylistHeaderTitle $width={'60'} $textEnd>
				<StyledPlaylistHeaderSvg alt="time">
					<use xlinkHref="img/icon/sprite.svg#icon-watch" />
				</StyledPlaylistHeaderSvg>
			</StyledPlaylistHeaderTitle>
		</StyledPlaylistHeaderWrapper>
	)
}

export default SongsHeader
