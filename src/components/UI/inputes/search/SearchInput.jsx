import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from '../../../../styles/searchInput'
import { setSearchValue } from '../../../../store/reducers/sounds'

const SearchInput = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	dispatch(setSearchValue(value))

	return (
		<S.SearchInfut
			className="search__text"
			type="search"
			placeholder="Поиск"
			name="search"
			value={value}
			onChange={(e) => {
				setValue(e.target.value)
			}}
		/>
	)
}

export default SearchInput
