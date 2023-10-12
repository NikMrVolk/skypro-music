import { useContext } from 'react'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import { SoundsContext } from '../../context/SoundsContext'
import CenterSkiletList from '../skilet/CenterSkiletList'
import * as SC from '../../styles/common'

const SongsList = () => {
	const { data, isLoading } = useContext(SoundsContext)

	return (
		<SC.Flex $column>
			<SongsHeader />
			<SC.Flex $column $overflowY="auto">
				{isLoading ? (
					<CenterSkiletList />
				) : (
					data.map((sound) => <SongItem key={sound.id} {...sound} />)
				)}
			</SC.Flex>
		</SC.Flex>
	)
}

export default SongsList
