import { useState, useCallback } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormData } from 'Types'
import { addOns, plans } from 'Constants'

const useFormState = () => {
	const [currentStep, setCurrentStep] = useState<number>(1)
	const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly')

	const methods = useForm<FormData>({
		defaultValues: {
			personalInfo: { name: '', email: '', phoneNumber: '' },
			selectedPlan: plans[frequency][0],
			addOns: addOns[frequency]
		}
	})

	const handleNextStep = useCallback(() => {
		methods.handleSubmit(() => {
			setCurrentStep((prevStep) => Math.min(prevStep + 1, 4))
		})()
	}, [methods])

	const handlePreviousStep = useCallback(() => {
		setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
	}, [])

	const handleFormDataChange = useCallback(
		(key: keyof FormData, value: any) => {
			methods.setValue(key, value)
		},
		[methods]
	)

	return {
		currentStep,
		frequency,
		setFrequency,
		handleNextStep,
		handlePreviousStep,
		handleFormDataChange,
		methods
	}
}

export default useFormState
