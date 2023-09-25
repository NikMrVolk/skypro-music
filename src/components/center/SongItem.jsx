import styled from 'styled-components'

const StyledPlaylistItem = styled.div`
	width: 100%;
	display: block;
	margin-bottom: 12px;
`

const StyledPlaylistTrack = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`

const StyledTrackTitleWrapper = styled.div`
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
	width: 447px;
`

const StyledTrackImgWrapper = styled.div`
	width: 51px;
	height: 51px;
	padding: 16px;
	background: #313131;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	margin-right: 17px;
`

const StyledTrackSvg = styled.div`
	width: 18px;
	height: 17px;
	fill: transparent;
	stroke: #4e4e4e;
`

const StyledTrackTitle = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	cursor: pointer;
`

const StyledTrackSubtitle = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #4e4e4e;
`

const StyledTrackAuthor = styled.div`
	width: 321px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
`

const StyledTrackAuthorLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	text-align: left;
`

const StyledTrackAlbum = styled.div`
	width: 245px;
`

const StyledTrackAlbumLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #696969;
`

const StyledTrackTimeSvg = styled.svg`
	width: 14px;
	height: 12px;
	margin-right: 17px;
	fill: transparent;
	stroke: #696969;
`

const StyledTrackTimeText = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: right;
	color: #696969;
`

const SongItem = ({ title, subTitle, executor, album, time }) => {
	return (
		<StyledPlaylistItem>
			<StyledPlaylistTrack>
				<StyledTrackTitleWrapper>
					<StyledTrackImgWrapper>
						<StyledTrackSvg alt="music">
							<use xlinkHref="img/icon/sprite.svg#icon-note" />
						</StyledTrackSvg>
					</StyledTrackImgWrapper>
					<StyledTrackTitle>
						{title} <StyledTrackSubtitle>{subTitle}</StyledTrackSubtitle>
					</StyledTrackTitle>
				</StyledTrackTitleWrapper>
				<StyledTrackAuthor>
					<StyledTrackAuthorLink href="http://">{executor}</StyledTrackAuthorLink>
				</StyledTrackAuthor>
				<StyledTrackAlbum>
					<StyledTrackAlbumLink href="http://">{album}</StyledTrackAlbumLink>
				</StyledTrackAlbum>
				<div>
					<StyledTrackTimeSvg alt="time">
						<use xlinkHref="img/icon/sprite.svg#icon-like" />
					</StyledTrackTimeSvg>
					<StyledTrackTimeText>{time}</StyledTrackTimeText>
				</div>
			</StyledPlaylistTrack>
		</StyledPlaylistItem>
	)
}

export default SongItem
