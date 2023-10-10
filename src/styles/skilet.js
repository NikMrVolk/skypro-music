import styled, { keyframes } from 'styled-components'

export const SkiletWrapper = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	display: ${(props) => props.$dF && 'flex'};
	flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	-webkit-box-direction: normal;
	-ms-flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	-webkit-box-orient: ${(props) => (props.$column && 'vertical') || (props.$row && 'horizontal')};
	justify-content: ${(props) =>
		(props.$jstSB && 'space-between') ||
		(props.$jstSA && 'space-around') ||
		(props.$jstFS && 'flex-start') ||
		(props.$jstC && 'center') ||
		(props.$jstFE && 'flex-end')};
	align-items: ${(props) => props.$alignC && 'center'};
	-webkit-box-align: ${(props) => props.$alignC && 'center'};
	-ms-flex-align: ${(props) => props.$alignC && 'center'};
	gap: ${(props) => props.$gap};
	margin-bottom: ${(props) => props.$mB};
	&:last-child {
		margin-bottom: 0px;
	}
`

const blick = keyframes`
	0%,
	50%,
	100% {
		opacity: 0.8;
	}

	25%,
	75% {
		opacity: 0.5;
	}
`

export const SkiletItem = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	margin-bottom: ${(props) => props.$mB};
	&:last-child {
		margin-bottom: 0px;
	}
	background: #313131;
	animation: ${blick} 4s ease 0s infinite normal forwards;
`
