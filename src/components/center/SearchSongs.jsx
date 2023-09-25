import styled from 'styled-components'
import SearchInput from '../UI/inputes/search/SearchInput'

const StyledSearchSongs = styled.div`
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

const StyledSearchSvg = styled.svg`
	width: 17px;
	height: 17px;
	margin-right: 5px;
	stroke: #ffffff;
	fill: transparent;
`

const SearchSongs = () => {
	return (
		<StyledSearchSongs>
			<StyledSearchSvg>
				<use xlinkHref="img/icon/sprite.svg#icon-search" />
			</StyledSearchSvg>
			<SearchInput />
		</StyledSearchSongs>
	)
}

export default SearchSongs
