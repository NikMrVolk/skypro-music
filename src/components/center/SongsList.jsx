import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import CenterSkiletList from '../skilet/CenterSkiletList'
import * as SC from '../../styles/common'

const SongsList = ({ data, isLoading, error }) => {
	return (
		<SC.Flex $column>
			<SongsHeader />
			<SC.Flex $column $overflow="scroll" $maxH="610px">
				{isLoading ? <CenterSkiletList /> : data?.map((sound) => <SongItem key={sound.id} {...sound} />)}
				{error && 'Не удалось загрузить плейлист, попробуйте позже'}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SongsList
