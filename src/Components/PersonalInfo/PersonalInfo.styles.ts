import styled from 'styled-components'

const StyledForm = styled.form`
	width: 100%;
	height: 264px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const StyledFieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const StyledLabelContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const StyledLabel = styled.label`
	height: 16px;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: #022959;
	text-align: left;
`

const ErrorText = styled.p`
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	text-align: right;
	color: #ee374a;
`

const StyledInput = styled.input`
	width: 100%;
	box-sizing: border-box;
	background: #ffffff;
	border: 1px solid #d6d9e6;
	border-radius: 8px;

	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	color: #022959;
	padding: 15px 0 15px 16px;

	&.error {
		border-color: #ee374a;
	}

	&:focus {
		border-color: #483eff;
		outline: unset;
	}
`

export {
	StyledForm,
	StyledFieldset,
	StyledLabelContainer,
	StyledLabel,
	ErrorText,
	StyledInput
}
