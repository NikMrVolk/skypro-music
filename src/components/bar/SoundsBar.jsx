import { useEffect, useRef, useState } from 'react'
import SoundsPlayer from './SoundsPlayer'
import SoundsVolume from './SoundsVolume'
import ProgressInput from '../UI/inputes/progress/ProgressInput'
import Timer from './Timer'
import { useGetOneSoundQuery } from '../../services/sounds/SoundsService'
import * as SC from '../../styles/common'
import { useDispatch, useSelector } from 'react-redux'
import { setSong, setPlaying, setIsShuffle, setShuffledPlaylist } from '../../store/reducers/sounds'
import { toShuffle } from '../../utils/toShuffle'

const SoundsBar = () => {
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [isLoop, setIsLoop] = useState(false)
	const [volume, setVolume] = useState(0.3)

	const audioRef = useRef()
	const dispatch = useDispatch()

	const { song, isShuffle, shuffledPlaylist, choosedPlaylist } =
		useSelector((state) => state.songs)
	const { data, isLoading } = useGetOneSoundQuery(song?.id)

	let currentPlaylist = shuffledPlaylist.length ? shuffledPlaylist : choosedPlaylist

	const trackIndex = currentPlaylist.findIndex(({ id }) => id === song.id)
	const checkLastSong = trackIndex === currentPlaylist.length - 1

	if (currentTime && audioRef.current.ended && !isLoop && !checkLastSong) {
		dispatch(setSong(currentPlaylist[trackIndex + 1].id))
		setCurrentTime(0)
	}

	if (audioRef.current?.ended && !isLoop && checkLastSong) {
		dispatch(setPlaying(false))
		audioRef.current.currentTime = 0
		setCurrentTime(0)
	}

	const handlePlayPreviousSong = () => {
		if (currentTime > 5) return (audioRef.current.currentTime = 0)
		if (!!trackIndex) dispatch(setSong(currentPlaylist[trackIndex - 1].id))
	}

	const handlerPlayNextSong = () => {
		if (!checkLastSong) dispatch(setSong(currentPlaylist[trackIndex + 1].id))
	}

	const handleShuffle = () => {
		if (isShuffle) {
			dispatch(setIsShuffle(!isShuffle))
			dispatch(setShuffledPlaylist([]))
		} else {
			dispatch(setIsShuffle(!isShuffle))
			dispatch(setShuffledPlaylist(toShuffle(currentPlaylist)))
		}
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
						shuffle={handleShuffle}
					/>
					<SoundsVolume volume={volume} change={handleChangeVolume} />
				</SC.Flex>
			</SC.Flex>
		</SC.Absolute>
	)
}

export default SoundsBar
