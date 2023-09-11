import { useContext } from 'react'
import SongItem from './SongItem'
import SongsHeader from './SongsHeader'
import { LoadingContext } from '../../context/LoadingContext'
import CenterSkilet from '../skilet/CenterSkilet'

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
		<div className="centerblock__content">
			<SongsHeader />
			<div className="content__playlist playlist">
				{songs.map((song, index) =>
					isLoading ? <CenterSkilet key={index} /> : <SongItem key={index} {...song} />
				)}
			</div>
		</div>
	)
}

export default SongsList
