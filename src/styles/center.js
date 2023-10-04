import styled from 'styled-components'

export const FilterButton = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: 1px solid #ffffff;
	border-radius: 60px;
	padding: 6px 20px;
	&:not(:last-child) {
		margin-right: 10px;
	}
	&:hover {
		border-color: ${(props) => (props.$active ? '#ad61ff' : '#d9b6ff')};
		color: ${(props) => (props.$active ? '#ad61ff' : '#d9b6ff')};
		cursor: pointer;
	}
	&:active {
		border-color: #ad61ff;
		color: #ad61ff;
		cursor: pointer;
	}
`