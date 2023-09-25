import styled from 'styled-components'

const StyledCenterSubtitle = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 72px;
	letter-spacing: -0.8px;
	margin-bottom: 45px;
`

const CenterSubtitle = (props) => {
	return <StyledCenterSubtitle>{props.children}</StyledCenterSubtitle>
}

export default CenterSubtitle
