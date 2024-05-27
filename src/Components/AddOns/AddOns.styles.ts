import styled from 'styled-components'

const AddOnContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const AddOnItem = styled.label<{ checked: boolean }>`
	height: 81px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid ${({ checked }) => (checked ? '#483eff' : '#ddd')};
	border-radius: 10px;
	padding: 20px;
	cursor: pointer;
	transition: border-color 0.3s;
	background: ${({ checked }) => (checked ? '#f0f4ff' : '#fff')};

	&:hover {
		border-color: #483eff;
	}

	&:focus-within {
		outline: 2px dashed #483eff;
		outline-offset: 4px;
	}
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	width: 0;
	height: 0;
	opacity: 0;

	&:checked + div {
		border-color: #483eff;
		background-color: #483eff;
	}

	&:checked + div::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 10px;
		height: 10px;
		background: #fff;
		border-radius: 2px;
		transform: translate(-50%, -50%);
	}
`

const CheckboxLabel = styled.div`
	width: 20px;
	height: 20px;
	border: 2px solid #ddd;
	border-radius: 5px;
	position: relative;
	transition: border-color 0.3s, background-color 0.3s;
`

const AddOnDetails = styled.div`
	flex-grow: 1;
	padding-left: 20px;
`

const AddOnTitle = styled.h3`
	font-size: 1.2rem;
	margin: 0;
`

const AddOnDescription = styled.p`
	font-size: 1rem;
	color: #888;
	margin: 5px 0 0 0;
`

const AddOnPrice = styled.span`
	font-size: 1rem;
	color: #483eff;
`

export {
	AddOnContainer,
	AddOnItem,
	Checkbox,
	CheckboxLabel,
	AddOnDetails,
	AddOnTitle,
	AddOnDescription,
	AddOnPrice
}
