import { useDispatch, useSelector } from 'react-redux'
import MyModal from '../UI/modal/MyModal'
import * as SC from '../../styles/common'
import { setSortElements } from '../../store/reducers/sounds'

const SortItem = ({ title, isVisible, setIsVisible, keyValue }) => {
	const dispatch = useDispatch()
	const { displayedPlaylist, sortElements } = useSelector((state) => state.songs)
	let sortValue

	const isReleaseDate = keyValue === 'release_date'
	const isReleaseDateChoosed = sortElements[keyValue][0] !== 'По умолчанию'

	if (!isReleaseDate) {
		sortValue = displayedPlaylist.map((el) => el[keyValue])
		sortValue = sortValue.filter((item, index) => sortValue.indexOf(item) === index)
	} else sortValue = ['По умолчанию', 'Сначала старые', 'Сначала новые']

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
			{(isReleaseDate && isReleaseDateChoosed) || (!isReleaseDate && sortElements[keyValue].length) ? (
				<SC.Absolute $w="26px" $h="26px" $top="-10px" $right="0px" $bG="#AD61FF" $brRad="26px">
					<SC.Flex $jstC $alignC $h="100%">
						{isReleaseDate && isReleaseDateChoosed ? '1' : ''}
						{!isReleaseDate && sortElements[keyValue].length}
					</SC.Flex>
				</SC.Absolute>
			) : (
				''
			)}
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
					$overflow={sortValue.length > 5 ? 'scroll' : 'hidden'}
				>
					{sortValue.map((value, index, arr) => (
						<SC.Block $mBnotL="28px" key={index}>
							<SC.Block
								$ftSz="20px"
								$lH="24px"
								$point="pointer"
								$colorHov="#b672ff"
								$tDecHov="underline"
								$color={sortElements[keyValue].includes(value) ? '#b672ff' : ''}
								$ftW={sortElements[keyValue].includes(value) ? '700' : ''}
								onClick={() => {
									dispatch(setSortElements({ key: keyValue, value }))
								}}
							>
								{arr[index]}
							</SC.Block>
						</SC.Block>
					))}
				</SC.Wrapper>
			</MyModal>
		</SC.Wrapper>
	)
}

export default SortItem
