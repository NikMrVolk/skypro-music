import MyModal from '../UI/modal/MyModal'
import * as SC from '../../styles/common'

const SortItem = ({ title, options, isVisible, setIsVisible, keyValue }) => {
	const handleModalActive = () => {
		const newObject = { ...isVisible }
		for (const key in newObject) {
			newObject[key] = false
		}
		if (isVisible[keyValue]) {
			setIsVisible({ ...newObject, [keyValue]: false })
		} else {
			setIsVisible({ ...newObject, [keyValue]: true })
		}
	}

	return (
		<SC.Wrapper $position="relative">
			<SC.Block
				$p="6px 20px"
				$color={isVisible[keyValue] ? '#ad61ff' : '#ffffff'}
				$br={isVisible[keyValue] ? '1px solid #ad61ff' : '1px solid #ffffff'}
				$brRad="60px"
				$mRnotL="10px"
				$point="pointer"
				$colorHov={isVisible[keyValue] ? '#ad61ff' : '#d9b6ff'}
				$brColorHov={isVisible[keyValue] ? '#ad61ff' : '#d9b6ff'}
				$colorAct="#ad61ff"
				$brColorAct="#ad61ff"
				$active={isVisible[keyValue]}
				onClick={handleModalActive}
			>
				{title}
			</SC.Block>
			<MyModal visible={isVisible[keyValue]}>
				<SC.Wrapper
					$minW="153px"
					$maxW="180px"
					$maxH="250px"
					$overflow={options.length > 5 ? 'scroll' : 'hidden'}
				>
					{options.map((option, index) => (
						<SC.Block $mBnotL="28px" key={index}>
							<SC.Block
								$ftSz="20px"
								$lH="24px"
								$point="pointer"
								$colorHov="#b672ff"
								$tDecHov="underline"
							>
								{option.name}
							</SC.Block>
						</SC.Block>
					))}
				</SC.Wrapper>
			</MyModal>
		</SC.Wrapper>
	)
}

export default SortItem
