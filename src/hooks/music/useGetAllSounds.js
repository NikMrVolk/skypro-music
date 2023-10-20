import { useQuery } from 'react-query'
import musicService from '../../services/music'

export const useGetAllSounds = () => {
	const { data, isLoading, isError } = useQuery(['allSounds'], musicService.getAll)
	return [data, isLoading, isError]
}
