import { useContext } from 'react'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import { LoadingContext } from '../../context/LoadingContext'
import CenterSkilet from '../skilet/CenterSkilet'
import * as S from '../../styles/center'

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
		<S.CenterblockWrapper>
			<SongsHeader />
			<S.Playlist>
				{songs.map((song, index) =>
					isLoading ? <CenterSkilet key={index} /> : <SongItem key={index} {...song} />
				)}
			</S.Playlist>
		</S.CenterblockWrapper>
	)
}

export default SongsList
