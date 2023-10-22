import * as SC from '../../styles/common'

const Timer = ({ duration, currentTime }) => {
	const durationS = duration % 60
	const durationM = (duration - durationS) / 60
	const currS = currentTime % 60
	const currM = (currentTime - currS) / 60

	return (
		<>
			{duration && currentTime ? (
				<SC.Flex $jstFE $m="0 50px 10px 0" $back="transparent">
					<SC.Block $lSpace="0.016px" $color="#696969">
						{`${currM} : ${currS > 10 ? '' : '0'}${currS === 60 ? '00' : Math.floor(currS)} / 
                     ${durationM} : ${durationS < 10 ? '0' : ''}${Math.floor(durationS)}`}
					</SC.Block>
				</SC.Flex>
			) : (
				<></>
			)}
		</>
	)
}

export default Timer
