import * as S from '../../styles/center'

const SongsHeader = () => {
	return (
		<S.PlaylistHeaderWrapper>
			<S.PlaylistHeaderTitle $w={'447'}>Трек</S.PlaylistHeaderTitle>
			<S.PlaylistHeaderTitle $w={'321'}>ИСПОЛНИТЕЛЬ</S.PlaylistHeaderTitle>
			<S.PlaylistHeaderTitle $w={'245'}>АЛЬБОМ</S.PlaylistHeaderTitle>
			<S.PlaylistHeaderTitle $w={'60'} $textEnd>
				<S.PlaylistHeaderSvg alt="time">
					<use xlinkHref="img/icon/sprite.svg#icon-watch" />
				</S.PlaylistHeaderSvg>
			</S.PlaylistHeaderTitle>
		</S.PlaylistHeaderWrapper>
	)
}

export default SongsHeader
