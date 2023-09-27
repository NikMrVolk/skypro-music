import * as S from '../../styles/center'

const SongItem = ({ title, subTitle, executor, album, time }) => {
	return (
		<S.PlaylistItem>
			<S.PlaylistTrack>
				<S.TrackTitleWrapper>
					<S.TrackImgWrapper>
						<S.TrackSvg alt="music">
							<use xlinkHref="img/icon/sprite.svg#icon-note" />
						</S.TrackSvg>
					</S.TrackImgWrapper>
					<S.TrackTitle>
						{title} <S.TrackSubtitle>{subTitle}</S.TrackSubtitle>
					</S.TrackTitle>
				</S.TrackTitleWrapper>
				<S.TrackAuthor>
					<S.TrackAuthorLink href="http://">{executor}</S.TrackAuthorLink>
				</S.TrackAuthor>
				<S.TrackAlbum>
					<S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
				</S.TrackAlbum>
				<div>
					<S.TrackTimeSvg alt="time">
						<use xlinkHref="img/icon/sprite.svg#icon-like" />
					</S.TrackTimeSvg>
					<S.TrackTimeText>{time}</S.TrackTimeText>
				</div>
			</S.PlaylistTrack>
		</S.PlaylistItem>
	)
}

export default SongItem
