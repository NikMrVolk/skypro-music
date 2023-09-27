import SearchInput from '../UI/inputes/search/SearchInput'
import * as S from '../../styles/center'

const SearchSongs = () => {
	return (
		<S.SearchSongs>
			<S.SearchSvg>
				<use xlinkHref="img/icon/sprite.svg#icon-search" />
			</S.SearchSvg>
			<SearchInput />
		</S.SearchSongs>
	)
}

export default SearchSongs
