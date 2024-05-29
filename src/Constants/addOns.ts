import { AddOn } from 'Types'
import { FREQUENCY_MONTHLY, FREQUENCY_YEARLY } from './frequencies'

const addOns: AddOn[] = [
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

function toYearlyAddOns(addOns: AddOn[]): AddOn[] {
	return addOns.map((addOn) => ({
		...addOn,
		frequency: FREQUENCY_YEARLY,
		price: addOn.price * 10
	}))
}

function toMonthlyAddOns(addOns: AddOn[]): AddOn[] {
	return addOns.map((addOn) => ({
		...addOn,
		frequency: FREQUENCY_MONTHLY,
		price: addOn.price / 10
	}))
}

export { addOns, toYearlyAddOns, toMonthlyAddOns }
