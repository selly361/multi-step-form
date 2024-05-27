import styled from 'styled-components'
import img from 'Assets/Images/bg-sidebar-desktop.svg'

const StyledAside = styled.aside`
	width: 274px;
	height: 100%;
	background: #483eff;
	border-radius: 10px;
	background-image: url(${img});
	padding: 40px 0 0 32px;

	display: flex;
	flex-direction: column;
	gap: 32px;
`

const StepContainer = styled.div`
	display: flex;
	height: 33px;
	gap: 16px;
`

const Step = styled.div`
	min-height: 33px;
	min-width: 33px;
	border-radius: 50%;
	border: 1px solid #ffffff;

	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	display: grid;
	place-items: center;
	
	color: #ffffff;
	transition: 0.5s ease color, 0.5s ease background;

	&.active {
		background-color: #bee2fd;
		color: #022959;
		border-color: #bee2fd;
	}
`

const StepSubContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

const StepContent = styled.h3`
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 1px;
	color: #ffffff;
`

const Text = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: #abbcff;
`

export { StyledAside, StepContainer, Step, StepSubContainer, StepContent, Text }
