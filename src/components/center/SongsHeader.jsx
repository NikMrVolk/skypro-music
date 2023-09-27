import * as S from '../../styles/center'

const SongsHeader = () => {
	return (
		<S.PlaylistHeaderWrapper>
			<S.PlaylistHeaderTitle $width={'447'}>Трек</S.PlaylistHeaderTitle>
			<S.PlaylistHeaderTitle $width={'321'}>ИСПОЛНИТЕЛЬ</S.PlaylistHeaderTitle>
			<S.PlaylistHeaderTitle $width={'245'}>АЛЬБОМ</S.PlaylistHeaderTitle>
			<S.PlaylistHeaderTitle $width={'60'} $textEnd>
				<S.PlaylistHeaderSvg alt="time">
					<use xlinkHref="img/icon/sprite.svg#icon-watch" />
				</S.PlaylistHeaderSvg>
			</S.PlaylistHeaderTitle>
		</S.PlaylistHeaderWrapper>
	)
}

export default SongsHeader
