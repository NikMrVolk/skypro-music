import * as S from '../../../../styles/progressInput'

const VolumeInput = (props) => {
	return <S.ProgressInput {...props} onChange={(e) => props.change(e)} type="range" name="range" />
}

export default VolumeInput
