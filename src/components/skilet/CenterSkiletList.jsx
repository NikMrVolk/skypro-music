import songsToSkillet from '../../data/soundsToCenterSkillet'
import CenterSkilet from './CenterSkilet'

const CenterSkiletList = () => {
	return (
		<>
			{songsToSkillet.map((el, index) => (
				<CenterSkilet key={index} />
			))}
		</>
	)
}

export default CenterSkiletList
