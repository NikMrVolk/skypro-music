import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Flex = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	margin: ${(props) => props.$m};
	margin-top: ${(props) => props.$mT};
	margin-right: ${(props) => props.$mR};
	margin-left: ${(props) => props.$mL};
	margin-bottom: ${(props) => props.$mB};
	padding: ${(props) => props.$p};
	border-bottom: ${(props) => props.$brB};
	fill: ${(props) => props.$fill};
	background: ${(props) => props.$back};
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
		(props.$jstSA && 'space-around') ||
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
	overflow-y: ${(props) => props.$overflowY};
	//Work with grid
	grid-area: ${(props) => props.$gridArea};
	-ms-grid-row: ${(props) => props.$gridRow};
	-ms-grid-row-span: ${(props) => props.$gridRowSpan};
	-ms-grid-column: ${(props) => props.$gridColumn};
	cursor: ${(props) => props.$point};
`

export const Grid = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	margin: ${(props) => props.$m};
	padding: ${(props) => props.$p};
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
	max-height: ${(props) => props.$maxH};
	min-height: ${(props) => props.$minH};
	width: ${(props) => props.$w};
	max-width: ${(props) => props.$maxW};
	min-width: ${(props) => props.$minW};
	margin: ${(props) => props.$m};
	margin-left: ${(props) => props.$mL};
	margin-bottom: ${(props) => props.$mB};
	padding: ${(props) => props.$p};
	cursor: ${(props) => props.$point};
	background-color: ${(props) => props.$backCol};
	border-radius: ${(props) => props.$brRad};
	&:not(:last-child) {
		margin-bottom: ${(props) => props.$mBNotLC};
	}
	position: ${(props) => props.$position};
	overflow: ${(props) => props.$overflow};
`

export const Block = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	padding: ${(props) => props.$p};
	margin-right: ${(props) => props.$mR};
	margin-bottom: ${(props) => props.$mB};
	display: ${(props) => props.$disp};
	border: ${(props) => props.$br};
	border-radius: ${(props) => props.$brRad};
	background: ${(props) => props.$bG};
	visibility: ${(props) => props.$vis};
	-webkit-box-flex: ${(props) => props.$fGrow};
	-ms-flex-positive: ${(props) => props.$fGrow};
	flex-grow: ${(props) => props.$fGrow};
	font-style: ${(props) => props.$ftSt};
	font-weight: ${(props) => props.$ftW};
	font-size: ${(props) => props.$ftSz};
	line-height: ${(props) => props.$lH};
	color: ${(props) => props.$color};
	letter-spacing: ${(props) => props.$lSpace};
	text-transform: ${(props) => props.$tTransf};
	text-align: ${(props) => props.$tAlign};
	cursor: ${(props) => props.$point};
	&:not(:last-child) {
		margin-right: ${(props) => props.$mRnotL};
		margin-bottom: ${(props) => props.$mBnotL};
	}
	&:hover {
		color: ${(props) => props.$colorHov};
		text-decoration: ${(props) => props.$tDecHov};
		border-color: ${(props) => props.$brColorHov};
	}
	&:active {
		color: ${(props) => props.$colorAct};
		text-decoration: ${(props) => props.$tDecAct};
		border-color: ${(props) => props.$brColorAct};
	}
`

export const Span = styled.span`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	display: ${(props) => props.$disp};
	background: ${(props) => props.$bG};
	background-color: ${(props) => props.$backCol};
	color: ${(props) => props.$color};
	text-align: ${(props) => props.$tAlign};
`

export const Absolute = styled.div`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	position: absolute;
	z-index: ${(props) => props.$z};
	left: ${(props) => props.$left};
	bottom: ${(props) => props.$bottom};
	top: ${(props) => props.$top};
	opacity: ${(props) => props.$opacity};
	background: ${(props) => props.$bG};
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

export const LinkA = styled.a`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	display: ${(props) => props.$disp};
	white-space: ${(props) => props.$wSpace};
	color: ${(props) => props.$color};
	font-style: ${(props) => props.$ftSt};
	font-style: ${(props) => props.$ftSt};
	font-weight: ${(props) => props.$ftW};
	font-size: ${(props) => props.$ftSz};
	line-height: ${(props) => props.$lH};
`

export const LinkComponent = styled(Link)`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	display: ${(props) => props.$disp};
	white-space: ${(props) => props.$wSpace};
	color: ${(props) => props.$color};
	font-style: ${(props) => props.$ftSt};
	font-style: ${(props) => props.$ftSt};
	font-weight: ${(props) => props.$ftW};
	font-size: ${(props) => props.$ftSz};
	line-height: ${(props) => props.$lH};
`

export const Img = styled.img`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	color: ${(props) => props.$color};
`

export const Svg = styled.svg`
	height: ${(props) => props.$h};
	width: ${(props) => props.$w};
	margin-right: ${(props) => props.$mR};
	fill: ${(props) => props.$fill};
	stroke: ${(props) => props.$stroke};
	cursor: ${(props) => props.$point};
	&:active {
		fill: ${(props) => props.$fillAct};
		stroke: ${(props) => props.$strokeAct};
	}
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

export const Nav = styled.nav`
	width: ${(props) => props.$w};
	background-color: ${(props) => props.$backCol};
	padding: ${(props) => props.$p};
`

export const Ul = styled.ul`
	padding: ${(props) => props.$p};
`

export const Li = styled.li`
	padding: ${(props) => props.$p};
	margin-bottom: ${(props) => props.$mB};
`

export const CenterSubtitle = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 72px;
	letter-spacing: -0.8px;
	margin-bottom: 45px;
`
