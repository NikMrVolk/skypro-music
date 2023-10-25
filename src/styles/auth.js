import styled from 'styled-components'

export const Form = styled.form`
	width: 366px;
	background-color: #ffffff;
	border-radius: 12px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 43px 47px 47px 40px;
`

export const LoginInput = styled.input`
	width: 100%;
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: 1px solid #d0cece;
	padding: 8px 1px;
	margin-top: ${(props) => props.$mT};
	margin-bottom: ${(props) => props.$mB};
	&::-webkit-input-placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #d0cece;
	}

	&:-ms-input-placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #d0cece;
	}

	&::-ms-input-placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #d0cece;
	}

	&::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #d0cece;
	}
`

export const LoginButton = styled.button`
	width: 278px;
	height: 52px;
	background-color: ${(props) => (props.$black ? '#580ea2' : 'transparent')};
	border-radius: 6px;
	margin-top: ${(props) => props.$mT};
	margin-bottom: ${(props) => props.$mB};
	border: ${(props) => (props.$black ? 'none' : '1px solid #d0cece')};
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	font-size: 18px;
	line-height: 24px;
	letter-spacing: -0.05px;
	color: ${(props) => (props.$black ? '#ffffff' : '#000000')};
	background-color: ${(props) => props.$dis && '#d9d9d9'};
	background-color: ${(props) => props.$black && props.$dis && '#271a58'};
	&:hover {
		background-color: ${(props) => (props.$black ? '#3f007d' : '#f4f5f6')};
	}
	&:active {
		background-color: ${(props) => (props.$black ? '#271a58' : '#d9d9d9')};
	}
`
