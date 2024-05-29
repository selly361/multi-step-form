import React from 'react'
import {
	CardButton,
	IconWrapper,
	Container,
	PlanName,
	PlanPrice,
	Period
} from './PlanCard.styles'
import { Plan, PlanName as TPlanName } from 'Types'

interface PlanCardProps {
	plan: Plan
	isSelected: boolean
	handleFormDataChange: (data: TPlanName) => void
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, handleFormDataChange }) => {
	return (
		<CardButton
			isSelected={isSelected}
			onClick={() => handleFormDataChange(plan.plan)}
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
}

export default PlanCard
