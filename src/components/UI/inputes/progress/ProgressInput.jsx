import * as S from '../../../../styles/progressInput'

const ProgressInput = (props) => {
	return (
		<S.ProgressInput
			onChange={(e) => props.change(e)}
			min={0}
			step={0.1}
			type="range"
			name="range"
			{...props}
		/>
	)
}

export default ProgressInput
