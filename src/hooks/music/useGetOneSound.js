import { useQuery } from 'react-query'
import musicService from '../../services/music'

export const useGetOneSound = (id) => {
	const { data, isLoading } = useQuery([`${id}`], () => {
		return musicService.getOne(id)
	})

	return [data, isLoading]
}
