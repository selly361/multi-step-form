import { Container, PlanContainer} from './PlanSelector.styles'
import PlanCard from './PlanCard'
import { plans } from 'Constants'
import { Plan } from 'Types'
import ToggleSwitch from './ToggleSwitch'

interface IPlanSelectorProps {
	selectedPlan: Plan
	handleFormDataChange: (data: Plan) => void
	frequency: 'yearly' | 'monthly'
	setFrequency: (frequency: 'yearly' | 'monthly') => void
}

const PlanSelector = ({ selectedPlan, handleFormDataChange, frequency, setFrequency }: IPlanSelectorProps) => {

	return (
		<Container>
			<PlanContainer>
				{plans[frequency].map((plan) => (
					<PlanCard
						key={plan.plan}
						plan={plan}
						isSelected={selectedPlan?.plan === plan.plan}
						onSelect={() => handleFormDataChange(plan)}
					/>
				))}
			</PlanContainer>
			<ToggleSwitch setFrequency={setFrequency} frequency={frequency} />
		</Container>
	)
}

export default PlanSelector
