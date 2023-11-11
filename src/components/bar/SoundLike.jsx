import { useSelector } from 'react-redux'
import * as SC from '../../styles/common'
import { useLike } from '../../hooks/useLike'

const SoundLike = () => {
	const { song, isSongLiked } = useSelector((state) => state.songs)
	const [like, disLike] = useLike(song.id)

	const likeOrDis = () => {
		if (isSongLiked) return disLike()
		like()
	}

	return (
		<SC.Flex $alignC>
			<SC.Wrapper $p="5px" onClick={likeOrDis}>
				{isSongLiked ? (
					<SC.Svg $h="12px" $w="14px" $fill="#B672FF" $stroke="#fff" className="_btn-icon" alt="like">
						<use xlinkHref="../img/icon/sprite.svg#icon-dislike" />
					</SC.Svg>
				) : (
					<SC.Svg $h="12px" $w="14px" $fill="none" $stroke="#fff" className="_btn-icon" alt="dislike">
						<use xlinkHref="../img/icon/sprite.svg#icon-like" />
					</SC.Svg>
				)}
			</SC.Wrapper>
		</SC.Flex>
	)
}

export default SoundLike
