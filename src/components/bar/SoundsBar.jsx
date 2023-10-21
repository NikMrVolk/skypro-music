import { useContext, useEffect, useRef, useState } from 'react'
import SoundsPlayer from './SoundsPlayer'
import SoundsVolume from './SoundsVolume'
import * as SC from '../../styles/common'
import { SoundsContext } from '../../context/SoundsContext'
import { useGetOneSound } from '../../hooks/music/useGetOneSound'
import ProgressInput from '../UI/inputes/progress/ProgressInput'
import Timer from './Timer'

const SoundsBar = () => {
	const { songBeingPlayedId, setIsPlaying } = useContext(SoundsContext)
	const [data, isLoading] = useGetOneSound(songBeingPlayedId)
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [isLoop, setIsLoop] = useState(false)
	const [volume, setVolume] = useState(0.3)
	const audioRef = useRef()

	if (currentTime && audioRef.current.ended && !isLoop) {
		setIsPlaying(false)
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
					/>
					<SoundsVolume volume={volume} change={handleChangeVolume} />
				</SC.Flex>
			</SC.Flex>
		</SC.Absolute>
	)
}

export default SoundsBar
