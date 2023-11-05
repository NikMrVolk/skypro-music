import { useLocation } from 'react-router'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import CenterSkiletList from '../skilet/CenterSkiletList'
import * as SC from '../../styles/common'
import { MAIN_ROUTE } from '../../utils/constants'

const SongsList = ({ data, isLoading, error }) => {
	const { pathname } = useLocation()

	return (
		<SC.Flex $column>
			<SongsHeader />
			<SC.Flex $column $overflow="scroll" $maxH={pathname === MAIN_ROUTE ? '500px' : '630px'}>
				{isLoading ? <CenterSkiletList /> : data?.map((sound) => <SongItem key={sound.id} {...sound} />)}
				{error && 'Не удалось загрузить плейлист, попробуйте позже'}
				{!data?.length && !error && 'Ваш плейлист пуст'}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SongsList
