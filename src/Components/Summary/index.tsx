import { AddOn, Plan, PlanName } from 'Types'
import {
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
} from './Summary.styles'
import { plans } from 'Constants'

interface SummaryProps {
	addOns: AddOn[]
	selectedPlan: PlanName
	frequency: 'yearly' | 'monthly'
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

function Summary({
	addOns,
	selectedPlan,
	frequency,
	setCurrentStep
}: SummaryProps) {
	const period = frequency === 'yearly' ? 'yr' : 'mo'

	const plan = plans[frequency].find((p) => p.plan === selectedPlan) as Plan

	const totalPrice =
		addOns.reduce((a, b) => (a += b.checked ? b.price : 0), 0) + plan.price

	const checkedAddOns = addOns.filter((addOn) => addOn.checked)

	return (
		<Container>
			<SubContainer>
				<PlanContainer>
					<PlanContent>
						<NameOfPlan>{selectedPlan}</NameOfPlan>
						<StyledButton onClick={() => setCurrentStep(2)}>
							Change
						</StyledButton>
					</PlanContent>

					<PriceOfPlan>
						${plan.price}/{period}
					</PriceOfPlan>
				</PlanContainer>
				{checkedAddOns.length ? (
					<AddOnsContainer>
						{checkedAddOns.map((addOn) => (
							<AddOnItem key={addOn.title}>
								<AddOnName>{addOn.title}</AddOnName>
								<AddOnPrice>
									${addOn.price}/{period}
								</AddOnPrice>
							</AddOnItem>
						))}
					</AddOnsContainer>
				) : null}
			</SubContainer>

			<BottomSection>
				<Text>Total (per {frequency === 'monthly' ? 'month' : 'year'})</Text>
				<TotalPrice>
					${totalPrice}/{period}
				</TotalPrice>
			</BottomSection>
		</Container>
	)
}

export default Summary
