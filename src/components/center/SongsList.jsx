import { useContext } from 'react'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import { SoundsContext } from '../../context/SoundsContext'
import CenterSkiletList from '../skilet/CenterSkiletList'
import * as SC from '../../styles/common'

const SongsList = () => {
	const { data, isLoading, isError } = useContext(SoundsContext)

	return (
		<SC.Flex $column>
			<SongsHeader />
			<SC.Flex $column $overflow="scroll" $maxH="610px">
				{isLoading ? (
					<CenterSkiletList />
				) : (
					data?.map((sound) => <SongItem key={sound.id} {...sound} />)
				)}
				{isError && 'Не удалось загрузить плейлист, попробуйте позже'}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SongsList
