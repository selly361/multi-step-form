import styled from 'styled-components'

const CardButton = styled.button<{ isSelected: boolean }>`
	width: 138px;
	height: 183px;
	border: 1px solid
		${({ isSelected }) => (isSelected ? '#483eff' : '#d6d9e6')};
	border-radius: 10px;
	padding: 20px 0 16px 16px;
	cursor: pointer;
	transition: border-color 0.3s;
	background: #fff;
	text-align: left;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (hover: hover) {
		&:hover {
			border-color: #483eff;
		}
	}
`

const IconWrapper = styled.div`
	margin-bottom: 39px;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 7px;
`

const PlanName = styled.h3`
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
	color: #022959;
`

const PlanPrice = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #9699aa;
`
const Period = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	color: #022959;
`

export { CardButton, IconWrapper, Container, PlanName, PlanPrice, Period }
