import { useParams } from 'react-router'
import data from '../data/sideElements'

const SingleCategory = () => {
	const params = useParams()
	const currentElement = data.filter((el) => el.id === +params.id)[0]

	return <div style={{ color: 'red', fontSize: '60px' }}>{currentElement.alt}</div>
}

export default SingleCategory
