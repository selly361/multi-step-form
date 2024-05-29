import { StyledFieldset, NextStepButton, PrevStepButton } from './Styled.buttons'

interface ButtonsProps {
	onNext: () => void
	onPrevious: () => void
	currentStep: number
}

function Buttons({ onNext, onPrevious, currentStep  }: ButtonsProps) {
	return (
		<StyledFieldset>
			{currentStep === 1 ? null : <PrevStepButton onClick={onPrevious}>Go Back</PrevStepButton>}
			<NextStepButton onClick={onNext}>{currentStep === 4 ? 'Confirm' : 'Next Step'}</NextStepButton>
		</StyledFieldset>
	)
}

export default Buttons
