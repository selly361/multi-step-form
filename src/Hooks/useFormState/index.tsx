import { useState, useCallback } from 'react'
import { FormData } from 'Types'
import { addOns, plans } from 'Constants'

const useFormState = () => {
	const [currentStep, setCurrentStep] = useState<number>(1)
	const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly')
	const [formData, setFormData] = useState<FormData>({
		personalInfo: { name: '', email: '', phoneNumber: '' },
		selectedPlan: plans[frequency][0],
		addOns: addOns[frequency]
	})

	const handleNextStep = useCallback(() => {
		setCurrentStep((prevStep) => Math.min(prevStep + 1, 4))
	}, [])

	const handlePreviousStep = useCallback(() => {
		setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
	}, [])

	const handleFormDataChange = useCallback(
		(key: keyof FormData, value: any) => {
			setFormData((prevData) => ({
				...prevData,
				[key]: value
			}))
		},
		[]
	)

	return {
		currentStep,
		frequency,
		formData,
		setFrequency,
		handleNextStep,
		handlePreviousStep,
		handleFormDataChange
	}
}

export default useFormState
