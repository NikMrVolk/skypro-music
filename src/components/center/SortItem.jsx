import MyModal from '../UI/modal/MyModal'
import * as S from '../../styles/center'

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
		<S.FilterButtonsWrapper>
			<S.FilterButton $active={isVisible[keyValue]} onClick={handleModalActive}>
				{title}
			</S.FilterButton>
			<MyModal visible={isVisible[keyValue]}>
				<S.FilterItemsWrapper $overflow={options.length > 5 ? 'scroll' : 'hidden'}>
					{options.map((option, index) => (
						<S.FilterItem key={index}>
							<S.FilterItemContent>{option.name}</S.FilterItemContent>
						</S.FilterItem>
					))}
				</S.FilterItemsWrapper>
			</MyModal>
		</S.FilterButtonsWrapper>
	)
}

export default SortItem
