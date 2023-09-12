import MyModal from '../UI/modal/MyModal'

const SortItem = ({
	title,
	style,
	options,
	isVisible,
	setIsVisible,
	keyValue,
}) => {
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
		<div className="filter__button-wrapper">
			<div
				className={['filter__button', '_btn-text', style].join(' ')}
				onClick={handleModalActive}
			>
				{title}
			</div>
			<MyModal visible={isVisible[keyValue]}>
				<div
					className={
						options.length > 5
							? ['filter__item-wrapper', 'filter__item-wrapper_big'].join(' ')
							: ['filter__item-wrapper', 'filter__item-wrapper_small'].join(' ')
					}
				>
					{options.map((option, index) => (
						<div className="filter__item" key={index}>
							<span className="filter__item-content">{option.name}</span>
						</div>
					))}
				</div>
			</MyModal>
		</div>
	)
}

export default SortItem
