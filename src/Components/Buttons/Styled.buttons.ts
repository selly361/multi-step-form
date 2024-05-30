import styled from 'styled-components'

const StyledFieldset = styled.fieldset`
	width: 100%;
	display: grid;
	grid-template-columns: 63px 123px;
	justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 16px;


	@media (max-width: 900px) {
		height: 72px;
		position: fixed;
		padding: 16px;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;
		background-color: white;
	}
`

const NextStepButton = styled.button`
	justify-self: end;
	width: max-content;
	height: 48px;
	padding: 14px 24px 16px 25px;
	background: #022959;
	border-radius: 8px;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	color: #ffffff;
	grid-column: 2;
	transition: 0.5s ease background;

	@media (hover: hover) {
		&:hover {
			background: #164a8a;
		}
	}
`

const PrevStepButton = styled.button`
	grid-column: 1;
	background-color: transparent;
	color: #9699aa;
	transition: 0.5s ease color;
    height: max-content;

	@media (hover: hover) {
		&:hover {
			color: #022959;
		}
	}
`

export { StyledFieldset, NextStepButton, PrevStepButton }
