import { useContext } from 'react'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import { LoadingContext } from '../../context/LoadingContext'
import CenterSkilet from '../skilet/CenterSkilet'
import styled from 'styled-components'

const StyledCenterblockWrapper = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`

const StyledPlaylist = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	overflow-y: auto;
`

const SongsList = ({ props }) => {
	const { isLoading } = useContext(LoadingContext)
	// Временная переменная до начала работы с API
	const songs = [
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
		{
			title: 'Guilt',
			subTitle: '(Remix)',
			executor: 'Nero',
			album: 'Welcome Reality',
			time: '4:44',
		},
	]
	// Знаю, что индекс массива к ключ лучше не вставлять, текущее решение временное
	return (
		<StyledCenterblockWrapper>
			<SongsHeader />
			<StyledPlaylist>
				{songs.map((song, index) =>
					isLoading ? <CenterSkilet key={index} /> : <SongItem key={index} {...song} />
				)}
			</StyledPlaylist>
		</StyledCenterblockWrapper>
	)
}

export default SongsList
