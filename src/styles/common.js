import styled from 'styled-components'

export const Flex = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	margin: ${(props) => props.$margin};
	margin-left: ${(props) => props.$mL};
	padding: ${(props) => props.$padding};
	fill: ${(props) => props.$fill};
	background-color: ${(props) => props.$backCol};
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	-webkit-box-direction: normal;
	-ms-flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	-webkit-box-orient: ${(props) => (props.$column && 'vertical') || (props.$row && 'horizontal')};
	justify-content: ${(props) =>
		(props.$jstSB && 'space-between') ||
		(props.$jstFS && 'flex-start') ||
		(props.$jstC && 'center') ||
		(props.$jstFE && 'flex-end')};
	-webkit-box-pack: ${(props) =>
		(props.$jstSB && 'justify') ||
		(props.$jstFS && 'start') ||
		(props.$jstC && 'center') ||
		(props.$jstFE && 'end')};
	-ms-flex-pack: ${(props) =>
		(props.$jstSB && 'justify') ||
		(props.$jstFS && 'start') ||
		(props.$jstC && 'center') ||
		(props.$jstFE && 'end')};
	align-items: ${(props) => props.$alignC && 'center'};
	-webkit-box-align: ${(props) => props.$alignC && 'center'};
	-ms-flex-align: ${(props) => props.$alignC && 'center'};
	//Work with grid
	grid-area: ${(props) => props.$gridArea};
	-ms-grid-row: ${(props) => props.$gridRow};
	-ms-grid-row-span: ${(props) => props.$gridRowSpan};
	-ms-grid-column: ${(props) => props.$gridColumn};
`

export const Grid = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	margin: ${(props) => props.$margin};
	padding: ${(props) => props.$padding};
	display: -ms-grid;
	display: grid;
	grid-template-columns: ${(props) => props.$gridTempCol};
	-ms-grid-columns: ${(props) => props.$gridTempCol};
	grid-template-areas: ${(props) => props.$gridTempAreas};
	grid-template-areas: 'image author' 'image album';
	align-items: ${(props) => props.$alignC && 'center'};
	-webkit-box-align: ${(props) => props.$alignC && 'center'};
	-ms-flex-align: ${(props) => props.$alignC && 'center'};
`

export const GridItem = styled.div`
	min-width: ${(props) => props.$mW};
	grid-area: ${(props) => props.$gridArea};
	-ms-grid-row: ${(props) => props.$gridRow};
	-ms-grid-row-span: ${(props) => props.$gridRowSpan};
	-ms-grid-column: ${(props) => props.$gridColumn};
`

export const Wrapper = styled.div`
	height: ${(props) => props.$h};
	min-height: ${(props) => props.$minH};
	width: ${(props) => props.$w};
	max-width: ${(props) => props.$maxW};
	margin: ${(props) => props.$margin};
	margin-left: ${(props) => props.$mL};
	margin-bottom: ${(props) => props.$mB};
	padding: ${(props) => props.$padding};
	cursor: ${(props) => props.$point};
	background-color: ${(props) => props.$backCol};
	border-radius: ${(props) => props.$brRad};
	&:not(:last-child) {
		margin-bottom: ${(props) => props.$mBNotLC};
	}
	position: ${(props) => props.$position};
	overflow: ${(props) => props.$overflow};
`

export const Main = styled.main`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
`

export const Svg = styled.svg`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	fill: ${(props) => props.$fill};
	stroke: ${(props) => props.$stroke};
	cursor: ${(props) => props.$point};
	&:active {
		fill: ${(props) => props.$fillAct};
		stroke: ${(props) => props.$strokeAct};
	}
`

export const Input = styled.input`
	width: ${(props) => props.$w};
`

export const P = styled.p`
	font-style: ${(props) => props.$ftSt};
	font-weight: ${(props) => props.$ftW};
	font-size: ${(props) => props.$ftSz};
	line-height: ${(props) => props.$lH};
	color: ${(props) => props.$color};
	margin-right: ${(props) => props.$mR};
`

export const Link = styled.a`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	display: ${(props) => props.$dB};
`

export const Img = styled.img`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	color: ${(props) => props.$color};
`
