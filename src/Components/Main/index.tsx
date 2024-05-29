import React from 'react'
import {
	Sidebar,
	Buttons,
	AddOns,
	PersonalInfo,
	PlanSelector,
	Summary,
	Confirmation
} from 'Components'
import { Title, Description, Container, StyledMain } from './Main.styles'
import { stageDescriptions } from 'Constants'
import useFormState from 'Hooks/useFormState'
import { FormProvider } from 'react-hook-form'

const Main: React.FC = () => {
	const {
		currentStep,
		frequency,
		setFrequency,
		handleNextStep,
		handlePreviousStep,
		methods,
		setCurrentStep,
		completed
	} = useFormState()

	const { title, description } = stageDescriptions[currentStep]

	return (
		<StyledMain>
			<Sidebar currentStep={currentStep} />
			<Container>
				{!completed ? (
					<>
						<Title>{title}</Title>
						<Description>{description}</Description>
						<FormProvider {...methods}>
							{currentStep === 1 && (
								<PersonalInfo
									handleFormDataChange={(data) =>
										methods.setValue('personalInfo', data)
									}
								/>
							)}
							{currentStep === 2 && (
								<PlanSelector
									frequency={frequency}
									setFrequency={setFrequency}
								/>
							)}
							{currentStep === 3 && (
								<AddOns
									frequency={frequency}
									handleFormDataChange={(addons) =>
										methods.setValue('addOns', addons)
									}
								/>
							)}
							{currentStep === 4 && (
								<Summary
									addOns={methods.getValues('addOns')}
									selectedPlan={methods.getValues('selectedPlan')}
									frequency={frequency}
									setCurrentStep={setCurrentStep}
								/>
							)}
						</FormProvider>
						<Buttons
							onNext={handleNextStep}
							onPrevious={handlePreviousStep}
							currentStep={currentStep}
						/>
					</>
				) : <Confirmation />}
			</Container>
		</StyledMain>
	)
}

export default Main
