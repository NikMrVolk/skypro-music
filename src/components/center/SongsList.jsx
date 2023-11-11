import { useLocation } from 'react-router'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import CenterSkiletList from '../skilet/CenterSkiletList'
import * as SC from '../../styles/common'
import { MAIN_ROUTE } from '../../utils/constants'
import { useSongs } from '../../hooks/useSongs'

const SongsList = ({ data, isLoading, error }) => {
	const { pathname } = useLocation()

	const sortedAndSearchedSongs = useSongs(data)

	return (
		<SC.Flex $column>
			<SongsHeader />
			<SC.Flex $column $overflow="scroll" $maxH={pathname === MAIN_ROUTE ? '500px' : '630px'}>
				{isLoading ? (
					<CenterSkiletList />
				) : (
					sortedAndSearchedSongs?.map((sound) => <SongItem key={sound.id} {...sound} />)
				)}
				{error && 'Не удалось загрузить плейлист, попробуйте позже'}
				{!sortedAndSearchedSongs?.length && !error && 'Ничего не найдено('}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SongsList
