import { AdvancedIcon, ArcadeIcon, ProIcon } from 'Assets/Icons'
import { FREQUENCY_MONTHLY, FREQUENCY_YEARLY } from './frequencies'
import { Plan } from 'Types'

const monthlyPlans: Plan[] = [
	{
		plan: 'Arcade',
		frequency: FREQUENCY_MONTHLY,
		icon: <ArcadeIcon />,
		price: 9
	},
	{
		plan: 'Advanced',
		frequency: FREQUENCY_MONTHLY,
		icon: <AdvancedIcon />,
		price: 12
	},
	{
		plan: 'Pro',
		frequency: FREQUENCY_MONTHLY,
		icon: <ProIcon />,
		price: 15
	}
]

const yearlyPlans: Plan[] = monthlyPlans.map((plan) => ({
	...plan,
	frequency: FREQUENCY_YEARLY,
	price: plan.price * 10,
	freePeriod: '2 months free'
}))

const plans = {
	yearly: yearlyPlans,
	monthly: monthlyPlans
}

export { plans }
