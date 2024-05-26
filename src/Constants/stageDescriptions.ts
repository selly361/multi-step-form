import { StageDescription } from 'Types'

const stageDescriptions: Record<number, StageDescription> = {
	1: {
		title: 'Personal info',
		description: 'Please provide your name, email address, and phone number.'
	},
	2: {
		title: 'Select your plan',
		description: 'You have the option of monthly or yearly billing.'
	},
	3: {
		title: 'Pick add-ons',
		description: 'Add-ons help enhance your gaming experience.'
	},
	4: {
		title: 'Finishing up',
		description: 'Double-check everything looks OK before confirming.'
	}
}

export { stageDescriptions }
