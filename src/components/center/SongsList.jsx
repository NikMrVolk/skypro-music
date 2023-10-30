import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import CenterSkiletList from '../skilet/CenterSkiletList'
import * as SC from '../../styles/common'

const SongsList = ({ data, isLoading, error, add, remove }) => {

	return (
		<SC.Flex $column>
			<SongsHeader />
			<SC.Flex $column $overflow="scroll" $maxH="500px">
				{isLoading ? (
					<CenterSkiletList />
				) : (
					data?.map((sound) => <SongItem key={sound.id} {...sound} add={add} remove={remove} />)
				)}
				{error && 'Не удалось загрузить плейлист, попробуйте позже'}
				{!data?.length && !error && 'Ваш плейлист пуст'}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SongsList
