import * as SC from '../../styles/common'

const SoundLike = () => {
	return (
		<SC.Flex $alignC>
			<SC.Wrapper
				$p="5px"
				onClick={() => {
					alert('Реализуется позже')
				}}
			>
				<SC.Svg
					$h="12px"
					$w="14px"
					$fill="transparent"
					$fillAct="#696969"
					$stroke="#696969"
					$strokeAct="#ffffff"
					className="_btn-icon"
					alt="like"
				>
					<use xlinkHref="img/icon/sprite.svg#icon-like" />
				</SC.Svg>
			</SC.Wrapper>
			<SC.Wrapper
				$p="5px"
				$mL="28.5px"
				onClick={() => {
					alert('Реализуется позже')
				}}
			>
				<SC.Svg
					$h="12px"
					$w="14px"
					$fill="transparent"
					$fillAct="#696969"
					$stroke="#696969"
					$strokeAct="#ffffff"
					className="_btn-icon"
					alt="dislike"
				>
					<use xlinkHref="img/icon/sprite.svg#icon-dislike" />
				</SC.Svg>
			</SC.Wrapper>
		</SC.Flex>
	)
}

export default SoundLike
