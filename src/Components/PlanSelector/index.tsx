import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Container, PlanContainer } from './PlanSelector.styles'
import PlanCard from './PlanCard'
import { plans } from 'Constants'
import { PlanName, FormData } from 'Types'
import ToggleSwitch from './ToggleSwitch'

interface PlanSelectorProps {
	frequency: 'yearly' | 'monthly'
	setFrequency: (frequency: 'yearly' | 'monthly') => void
}

const PlanSelector: React.FC<PlanSelectorProps> = ({ frequency, setFrequency }) => {
	const { watch, setValue } = useFormContext<FormData>()
	const selectedPlan = watch('selectedPlan')

	const handlePlanChange = (plan: PlanName) => {
		setValue('selectedPlan', plan)
	}

	return (
		<Container>
			<PlanContainer>
				{plans[frequency].map((plan) => (
					<PlanCard
						key={plan.plan}
						plan={plan}
						isSelected={selectedPlan === plan.plan}
						handleFormDataChange={handlePlanChange}
					/>
				))}
			</PlanContainer>
			<ToggleSwitch setFrequency={setFrequency} frequency={frequency} />
		</Container>
	)
}

export default PlanSelector
