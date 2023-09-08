const SearchSongs = ({ props }) => {
	return (
		<div className="centerblock__search search">
			<svg className="search__svg">
				<use xlinkHref="img/icon/sprite.svg#icon-search" />
			</svg>
			<input className="search__text" type="search" placeholder="Поиск" name="search" />
		</div>
	)
}

export default SearchSongs
