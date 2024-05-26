import { FormStep } from 'Types'
import { STEPS } from './steps'

const formSteps: FormStep[] = [
	{ step: STEPS[1], number: 1, content: 'YOUR INFO' },
	{ step: STEPS[2], number: 2, content: 'SELECT PLAN' },
	{ step: STEPS[3], number: 3, content: 'ADD-ONS' },
	{ step: STEPS[4], number: 4, content: 'SUMMARY' }
]

export { formSteps }