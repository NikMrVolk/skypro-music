import { useState } from 'react'
import { useNavigate } from 'react-router'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import CenterSkiletList from '../skilet/CenterSkiletList'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../services/sounds/SoundsService'
import { useRefreshMutation } from '../../services/user/UserService'
import { LOGIN_ROUTE } from '../../utils/constants'
import * as SC from '../../styles/common'

const SongsList = ({ data, isLoading, error}) => {
	const [requestData, setRequestData] = useState({})
	const navigate = useNavigate()

	const [add, addResponse] = useAddFavoriteMutation()
	const [remove, removeResponse] = useRemoveFavoriteMutation()
	const [refresh, refreshResponse] = useRefreshMutation()

	if (addResponse?.error?.status === 401 || removeResponse?.error?.status === 401) {
		refresh({ refresh: localStorage.getItem('refresh') })

		const id = addResponse?.originalArgs?.id || removeResponse?.originalArgs?.id
		const whatIsRequest = addResponse.endpointName ? 'add' : 'remove'
		setRequestData({ id, whatIsRequest })

		addResponse.reset()
		removeResponse.reset()
	}

	if (refreshResponse.isSuccess) {
		const token = refreshResponse.data.access
		const dataToRequest = { id: requestData.id, token }
		localStorage.setItem('access', token)

		if (requestData.whatIsRequest === 'add') add(dataToRequest)
		if (requestData.whatIsRequest === 'remove') remove(dataToRequest)
		refreshResponse.reset()
	}

	if (refreshResponse.isError) navigate(LOGIN_ROUTE)

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
