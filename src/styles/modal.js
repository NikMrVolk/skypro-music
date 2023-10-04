import styled from 'styled-components'

export const Modal = styled.div`
	display: ${(props) => props.$disp};
	top: ${(props) => props.$top};
	position: ${(props) => props.$pos};
`

export const ModalContent = styled.div`
	padding: ${(props) => props.$p};
	background: ${(props) => props.$back};
	border-radius: ${(props) => props.$brRad};
`
