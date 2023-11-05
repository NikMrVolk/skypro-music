import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { MAIN_ROUTE } from '../utils/constants'

const useGetSortedSongsWithDate = (data) => {
	const { release_date } = useSelector((state) => state.songs.sortElements)

	const getSortedSongsWithDate = useMemo(() => {
		const getDate = (date) => new Date(date).getTime()
		const comparisonByDate = (a, b) => getDate(a.release_date) - getDate(b.release_date)
		let sortedSongsWithDate

		if (release_date[0] === 'Сначала старые') {
			sortedSongsWithDate = [...data].sort((a, b) => comparisonByDate(a, b))
		}
		if (release_date[0] === 'Сначала новые') {
			sortedSongsWithDate = [...data].sort((a, b) => comparisonByDate(a, b) * -1)
		}
		return sortedSongsWithDate ?? data
	}, [data, release_date])

	const { pathname } = useLocation()
	if (pathname !== MAIN_ROUTE) return data

	return getSortedSongsWithDate
}

const useGetSortedSongsWithAll = (data) => {
	const { author, genre } = useSelector((state) => state.songs.sortElements)

	const sortedSongsWithDate = useGetSortedSongsWithDate(data)

	const getSortedSongsWithAll = useMemo(() => {
		let sortedSongsWithAll

		if (author.length && !genre.length)
			sortedSongsWithAll = sortedSongsWithDate?.filter((el) => author.includes(el.author))

		if (!author.length && genre.length)
			sortedSongsWithAll = sortedSongsWithDate?.filter((el) => genre.includes(el.genre))

		if (author.length && genre.length)
			sortedSongsWithAll = sortedSongsWithDate?.filter((el) => author.includes(el.author) && genre.includes(el.genre))

		return sortedSongsWithAll ?? sortedSongsWithDate
	}, [author, genre, sortedSongsWithDate])

	const { pathname } = useLocation()
	if (pathname !== MAIN_ROUTE) return data

	return getSortedSongsWithAll
}

export const useSongs = (data) => {
	const { searchValue } = useSelector((state) => state.songs)

	const sortedSongs = useGetSortedSongsWithAll(data)

	const getSearchedAndSortedSongs = useMemo(() => {
		if (searchValue)
			return sortedSongs?.filter(
				({ name, author, genre }) =>
					name.toLowerCase().includes(searchValue.toLowerCase()) ||
					author.toLowerCase().includes(searchValue.toLowerCase()) ||
					genre.toLowerCase().includes(searchValue.toLowerCase())
			)
		return sortedSongs
	}, [searchValue, sortedSongs])
	return getSearchedAndSortedSongs
}
