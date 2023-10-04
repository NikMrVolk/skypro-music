import SearchInput from '../UI/inputes/search/SearchInput'
import * as SC from '../../styles/common'
import * as S from '../../styles/center'

const SearchSongs = () => {
	return (
		<SC.Flex $w="100%" $mT="20px" $mB="51px" $brB="1px solid #4e4e4e" $row $alignC>
			<SC.Svg $h="17px" $w="17px" $mR="5px" $stroke="#ffffff" $fill="transparent">
				<use xlinkHref="img/icon/sprite.svg#icon-search" />
			</SC.Svg>
			<SearchInput />
		</SC.Flex>
	)
}

export default SearchSongs
