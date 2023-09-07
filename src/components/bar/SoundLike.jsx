const SoundLike = ({ props }) => {
	return (
		<div className="track-play__like-dis">
			<div className="track-play__like _btn-icon">
				<svg className="track-play__like-svg" alt="like">
					<use xlinkHref="img/icon/sprite.svg#icon-like" />
				</svg>
			</div>
			<div className="track-play__dislike _btn-icon">
				<svg className="track-play__dislike-svg" alt="dislike">
					<use xlinkHref="img/icon/sprite.svg#icon-dislike" />
				</svg>
			</div>
		</div>
	)
}

export default SoundLike
