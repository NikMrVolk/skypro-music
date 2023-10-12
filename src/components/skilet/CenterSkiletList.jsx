import songsToSkillet from '../../data/soundsToCenterSkillet'
import CenterSkilet from './CenterSkilet'

const CenterSkiletList = () => {
	return (
		<>
			{songsToSkillet.map((el) => (
				<CenterSkilet key={el.title} />
			))}
		</>
	)
}

export default CenterSkiletList
