import styled from 'styled-components'

export const Flex = styled.div`
	height: ${(props) => props.$height};
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: ${(props) => (props.$column && 'vertical') || (props.$row && 'horizontal')};
	-webkit-box-direction: normal;
	-ms-flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	flex-direction: ${(props) => (props.$column && 'column') || (props.$row && 'row')};
	-webkit-box-pack: ${(props) => props.$jstSB && 'justify'};
	-ms-flex-pack: ${(props) => props.$jstSB && 'justify'};
	justify-content: ${(props) => props.$jstSB && 'space-between'};
`
