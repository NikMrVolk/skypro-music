import { useEffect, useRef, useState } from 'react'
import SoundsPlayer from './SoundsPlayer'
import SoundsVolume from './SoundsVolume'
import ProgressInput from '../UI/inputes/progress/ProgressInput'
import Timer from './Timer'
import { useGetOneSoundQuery } from '../../services/sounds/SoundsService'
import * as SC from '../../styles/common'
import { useDispatch, useSelector } from 'react-redux'
import { setSong, setPlaying } from '../../store/reducers/sounds'

const SoundsBar = () => {
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [isLoop, setIsLoop] = useState(false)
	const [volume, setVolume] = useState(0.3)
	const audioRef = useRef()
	const dispatch = useDispatch()

	const { playlist, song } = useSelector((state) => state.songs)
	const { data, isLoading } = useGetOneSoundQuery(song?.id)
	const trackIndex = playlist.findIndex(({ id }) => id === song.id)
	const checkLastSong = trackIndex === playlist.length - 1

	if (currentTime && audioRef.current.ended && !isLoop && !checkLastSong) {
		dispatch(setSong(playlist[trackIndex + 1].id))
		setCurrentTime(0)
	}

	if (audioRef.current?.ended && !isLoop && checkLastSong) {
		dispatch(setPlaying(false))
	}

	const handlePlayPreviousSong = () => {
		if (!!trackIndex) dispatch(setSong(playlist[trackIndex - 1].id))
	}

	const handlerPlayNextSong = () => {
		if (!checkLastSong) dispatch(setSong(playlist[trackIndex + 1].id))
	}

	const handleChangeProgress = (e) => {
		audioRef.current.currentTime = e.target.value
		setCurrentTime(e.target.value)
	}

	const handleChangeVolume = (e) => {
		audioRef.current.volume = e.target.value
		setVolume(e.target.value)
	}

	useEffect(() => {
		const ref = audioRef.current
		ref.volume = 0.3

		const handleTimeUpdate = () => {
			if (ref.currentTime && ref.duration) {
				setCurrentTime(ref.currentTime)
				setDuration(ref.duration)
			} else {
				setCurrentTime(0)
				setDuration(0)
			}
		}

		ref.addEventListener('timeupdate', handleTimeUpdate)

		return () => {
			ref.removeEventListener('timeupdate', handleTimeUpdate)
		}
	}, [])

	return (
		<SC.Absolute $w="100%" $left="0" $bottom="0" $bG="transparent">
			<audio autoPlay src={data?.track_file} ref={audioRef} />
			<Timer currentTime={currentTime} duration={duration} />
			<SC.Flex $column $back="rgba(28, 28, 28)">
				<ProgressInput
					max={duration}
					value={currentTime}
					change={handleChangeProgress}
					$color="#B672FF"
					$customCursor
				/>
				<SC.Flex $h="73px" $row $jstSB>
					<SoundsPlayer
						data={data}
						isLoading={isLoading}
						isLoop={isLoop}
						setIsLoop={setIsLoop}
						audioPlayer={audioRef.current}
						playNext={handlerPlayNextSong}
						playPrevious={handlePlayPreviousSong}
					/>
					<SoundsVolume volume={volume} change={handleChangeVolume} />
				</SC.Flex>
			</SC.Flex>
		</SC.Absolute>
	)
}

export default SoundsBar
