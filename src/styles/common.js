import styled from 'styled-components'

export const Flex = styled.div`
	height: ${(props) => props.$height};
	width: ${(props) => props.$width};
	margin: ${(props) => props.$margin};
	padding: ${(props) => props.$padding};
	fill: ${(props) => props.$fill};
	display: flex;
	/* display: -webkit-box;
	display: -ms-flexbox; */
	flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	-webkit-box-direction: normal;
	-ms-flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	-webkit-box-orient: ${(props) => (props.$column && 'vertical') || (props.$row && 'horizontal')};
	justify-content: ${(props) =>
		(props.$jstSB && 'space-between') || (props.$jstFS && 'flex-start')};
	-webkit-box-pack: ${(props) => (props.$jstSB && 'justify') || (props.$jstFS && 'start')};
	-ms-flex-pack: ${(props) => (props.$jstSB && 'justify') || (props.$jstFS && 'start')};
	align-items: ${(props) => props.$alignC && 'center'};
	-webkit-box-align: ${(props) => props.$alignC && 'center'};
	-ms-flex-align: ${(props) => props.$alignC && 'center'};
`

export const Wrapper = styled.div`
	height: ${(props) => props.$height};
	width: ${(props) => props.$width};
	margin: ${(props) => props.$margin};
	padding: ${(props) => props.$padding};
`

export const Svg = styled.svg`
	height: ${(props) => props.$height};
	width: ${(props) => props.$width};
	fill: ${(props) => props.$fill};
	stroke: ${(props) => props.$stroke};
`

export const Input = styled.input`
	width: ${(props) => props.$width};
`
