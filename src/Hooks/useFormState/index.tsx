import { useState, useCallback, useEffect, useRef } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { FormData } from 'Types'
import { addOns } from 'Constants'
import { toMonthlyAddOns, toYearlyAddOns } from 'Constants/addOns'

const useFormState = () => {
	const [currentStep, setCurrentStep] = useState<number>(1)
	const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('yearly')
	const [completed, setCompleted] = useState(false)
	const isFirstRender = useRef(true) 

	const methods = useForm<FormData>({
		defaultValues: {
			personalInfo: { name: '', email: '', phoneNumber: '' },
			selectedPlan: 'Arcade',
			addOns: addOns
		}
	})

	const handleNextStep = useCallback(() => {
		if(currentStep === 4){
			setCompleted(e => true)
		}

		methods.handleSubmit(() => {
			setCurrentStep((prevStep) => Math.min(prevStep + 1, 4))
		})()
	}, [methods, currentStep])

	const handlePreviousStep = useCallback(() => {
		setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
	}, [])

	const handleFormDataChange = useCallback(
		(key: keyof FormData, value: any) => {
			methods.setValue(key, value)
		},
		[methods]
	)

	useEffect(() => {
		if (!isFirstRender.current) {
			console.log('RE-RENDERED')
			if (frequency === 'yearly') {
				handleFormDataChange(
					'addOns',
					toYearlyAddOns(methods.getValues('addOns'))
				)
			} else {
				handleFormDataChange(
					'addOns',
					toMonthlyAddOns(methods.getValues('addOns'))
				)
			}
		} else {
			isFirstRender.current = false
		}
	}, [frequency])

	return {
		currentStep,
		frequency,
		setFrequency,
		handleNextStep,
		handlePreviousStep,
		handleFormDataChange,
		methods,
		setCurrentStep,
		completed
	}
}

export default useFormState
