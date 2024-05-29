import styled from 'styled-components'

const Container = styled.div`
	min-height: 228px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const SubContainer = styled.div`
	max-height: max-height;
	background: #f8f9ff;
	border-radius: 8px;
	padding: 16px 24px 24px 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const PlanContainer = styled.div`
	height: 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const PlanContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 7px;
	width: 45px;
`

const NameOfPlan = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	color: #022959;
`

const StyledButton = styled.button`
	background: transparent;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	text-decoration-line: underline;
	color: #9699aa;
`

const PriceOfPlan = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	color: #022959;
`

const AddOnsContainer = styled.div`
	width: 100%;
	border-top: 1px solid rgba(151, 151, 151, 0.2);
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const AddOnItem = styled.div`
	display: flex;
	justify-content: space-between;
`

const AddOnName = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #9699aa;
`

const AddOnPrice = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #022959;
`

const BottomSection = styled(AddOnItem)`
	padding: 0 24px;
`

const Text = styled(AddOnName)``

const TotalPrice = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 20px;
	color: #483eff;
`

export {
	Container,
	SubContainer,
	PlanContainer,
	PlanContent,
	NameOfPlan,
	StyledButton,
	PriceOfPlan,
	AddOnsContainer,
	AddOnItem,
	AddOnName,
	AddOnPrice,
	BottomSection,
	Text,
	TotalPrice
}
