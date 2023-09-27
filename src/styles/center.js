import styled from 'styled-components'

export const Center = styled.div`
	width: auto;
	-webkit-box-flex: 3;
	-ms-flex-positive: 3;
	flex-grow: 3;
	padding: 20px 40px 20px 111px;
`

export const SearchSongs = styled.div`
	width: 100%;
	border-bottom: 1px solid #4e4e4e;
	margin-bottom: 51px;
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
`

export const SearchSvg = styled.svg`
	width: 17px;
	height: 17px;
	margin-right: 5px;
	stroke: #ffffff;
	fill: transparent;
`

export const CenterSubtitle = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 72px;
	letter-spacing: -0.8px;
	margin-bottom: 45px;
`

export const CenterblockFilterWrapper = styled.div`
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
	margin-bottom: 51px;
`

export const CenterblockFilterTitle = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-right: 15px;
`

export const FilterButtonsWrapper = styled.div`
	position: relative;
`

export const FilterButton = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: 1px solid #ffffff;
	border-radius: 60px;
	padding: 6px 20px;
	&:not(:last-child) {
		margin-right: 10px;
	}
	&:hover {
		border-color: ${(props) => (props.$active ? '#ad61ff' : '#d9b6ff')};
		color: ${(props) => (props.$active ? '#ad61ff' : '#d9b6ff')};
		cursor: pointer;
	}
	&:active {
		border-color: #ad61ff;
		color: #ad61ff;
		cursor: pointer;
	}
`

export const FilterItemsWrapper = styled.div`
	min-width: 153px;
	max-width: 180px;
	max-height: 250px;
	overflow: ${(props) => props.$overflow};
`

export const FilterItem = styled.div`
	margin-bottom: 28px;
	&:last-child {
		margin-bottom: 0px;
	}
`

export const FilterItemContent = styled.span`
	font-size: 20px;
	line-height: 24px;
	&:hover {
		color: #b672ff;
		text-decoration: underline;
	}
`

export const CenterblockWrapper = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`

export const Playlist = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	overflow-y: auto;
`

export const PlaylistHeaderWrapper = styled.div`
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

export const PlaylistHeaderTitle = styled.div`
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

export const PlaylistHeaderSvg = styled.svg`
	width: 12px;
	height: 12px;
	fill: transparent;
	stroke: #696969;
`

export const PlaylistItem = styled.div`
	width: 100%;
	display: block;
	margin-bottom: 12px;
`

export const PlaylistTrack = styled.div`
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

export const TrackTitleWrapper = styled.div`
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

export const TrackImgWrapper = styled.div`
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

export const TrackSvg = styled.div`
	width: 18px;
	height: 17px;
	fill: transparent;
	stroke: #4e4e4e;
`

export const TrackTitle = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	cursor: pointer;
`

export const TrackSubtitle = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #4e4e4e;
`

export const TrackAuthor = styled.div`
	width: 321px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
`

export const TrackAuthorLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	text-align: left;
`

export const TrackAlbum = styled.div`
	width: 245px;
`

export const TrackAlbumLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #696969;
`

export const TrackTimeSvg = styled.svg`
	width: 14px;
	height: 12px;
	margin-right: 17px;
	fill: transparent;
	stroke: #696969;
`

export const TrackTimeText = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: right;
	color: #696969;
`
