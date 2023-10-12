import { useLocation } from 'react-router'
import data from '../data/sideElements'

const SingleCategory = () => {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const currentElement = data.filter((el) => el.id === +id)[0]

	return <div style={{ color: 'red', fontSize: '60px' }}>{currentElement.alt}</div>
}

export default SingleCategory
