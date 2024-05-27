import { CardButton, IconWrapper, Container, PlanName, PlanPrice, Period } from './PlanCard.styles'
import { Plan } from 'Types'

interface PlanCardProps {
	plan: Plan
	isSelected: boolean
	onSelect: () => void
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, onSelect }) => (
	<CardButton
		isSelected={isSelected}
		onClick={onSelect}
		aria-pressed={isSelected}
		aria-label={`Select ${plan.plan} plan`}
	>
		<IconWrapper>{plan.icon}</IconWrapper>
		<Container>
			<PlanName>{plan.plan}</PlanName>
			<PlanPrice>
				${plan.price}/{plan.frequency === 'monthly' ? 'mo' : 'yr'}
			</PlanPrice>
			{plan.freePeriod && <Period>{plan.freePeriod}</Period>}
		</Container>
	</CardButton>
)
export default PlanCard
