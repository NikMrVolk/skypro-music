import cl from './MyModal.module.css'
import * as S from '../../../styles/modal'

const MyModal = ({ visible, children }) => {
	return (
		<S.Modal
			$disp={visible ? 'block' : 'none'}
			$pos={visible ? 'absolute' : ''}
			$top={visible ? '49px' : ''}
		>
			<S.ModalContent
				$p="24px"
				$back="#313131"
				$brRad="16px"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</S.ModalContent>
		</S.Modal>
	)
}

export default MyModal
