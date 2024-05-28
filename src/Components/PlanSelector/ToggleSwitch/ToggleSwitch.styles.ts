import styled from 'styled-components'

interface LabelProps {
	active: boolean
}

interface KnobProps {
	active: boolean
}

const ToggleSwitchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f0f0f0;
	padding: 10px;
    gap: 24px;
	width: 100%;
    border-radius: 8px;
`

const Label = styled.label<LabelProps>`
	font-size: 16px;
	font-weight: 'bold';
	color: ${({ active }) => (active ? '#1f3b6e' : '#888')};
	cursor: pointer;
`

const Switch = styled.div`
	width: 38px;
	height: 20px;
	background-color: #1f3b6e;
	border-radius: 50px;
	position: relative;
	cursor: pointer;
	transition: background-color 0.2s;
    padding: 4px;

	&:focus-visible {
		outline: 2px dashed #483EFF;
		outline-offset: 3px;
	}
`

const Knob = styled.div<KnobProps>`
	width: 12px;
	height: 12px;
	background-color: #fff;
	border-radius: 50%;
	position: absolute;
	left: ${({ active }) => (active ? '18px' : '4px')};
	transition: left 0.2s;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	opacity: 0;
	width: 0;
	height: 0;
	position: absolute;
`

export { ToggleSwitchContainer, Label, Switch, Knob, HiddenCheckbox }