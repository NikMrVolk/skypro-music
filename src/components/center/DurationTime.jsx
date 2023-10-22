import * as SC from '../../styles/common'

const DurationTime = ({ duration }) => {
	const seconds = duration % 60
	const minutes = (duration - seconds) / 60
	// До выяснения причины, почему с сервера приходит неверное время 

	return (
		<SC.Span $color="#696969" $tAlign="right">
			{/* {seconds < 10 ? `${minutes} : 0${seconds}` : `${minutes} : ${seconds}`} */}
         {duration}
		</SC.Span>
	)
}

export default DurationTime
