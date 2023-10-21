import * as S from '../../styles/progressInput'

const ProgressInput = ({ audioRef, duration, currentTime, setCurrentTime }) => {

	return (
		<S.ProgressInput
			type="range"
			min={0}
			max={duration}
			value={currentTime}
			step={0.01}
			onChange={(event) => {
				setCurrentTime(event.target.value)
				audioRef.current.currentTime = event.target.value
			}}
			$color="#B672FF"
			$customCursor
		/>
	)
}

export default ProgressInput
