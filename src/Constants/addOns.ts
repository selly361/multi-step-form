import { AddOn } from 'Types'
import { FREQUENCY_MONTHLY, FREQUENCY_YEARLY } from './frequencies'

const monthlyAddOns: AddOn[] = [
	{
		title: 'Online service',
		description: 'Access to multiplayer games',
		frequency: FREQUENCY_MONTHLY,
		price: 1,
		checked: false
	},
	{
		title: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		frequency: FREQUENCY_MONTHLY,
		price: 2,
		checked: false
	},
	{
		title: 'Customizable Profile',
		description: 'Custom theme on your profile',
		frequency: FREQUENCY_MONTHLY,
		price: 2,
		checked: false
	}
]

const yearlyAddOns: AddOn[] = monthlyAddOns.map((addOn) => ({
	...addOn,
	frequency: FREQUENCY_YEARLY,
	price: addOn.price * 10
}))

const addOns = {
	yearly: yearlyAddOns,
	monthly: monthlyAddOns
}

export { addOns }
