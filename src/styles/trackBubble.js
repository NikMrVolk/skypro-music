import styled, { keyframes } from 'styled-components'

const scale = keyframes`
	0%,
	50%,
	100% {
		transform: scale(1);
	}

	25%,
	75% {
		transform: scale(0.7);
	}
`

export const TrackBubble = styled.div`
	height: 16px;
	width: 16px;
	background-color: #b672ff;
	border-radius: 50%;
	animation: ${scale} 1.5s ease 0s infinite normal forwards;
	animation: ${(props) => !props.$active && 'none'};
`
