import { formSteps } from 'Constants'
import { StyledAside, StepContainer, Step, StepSubContainer, StepContent, Text } from './Sidebar.styles'

interface ISidebarProps {
  currentStep: number
}

function Sidebar({ currentStep }: ISidebarProps) {

  return (
    <StyledAside>
        {formSteps.map(formStep => (
          <StepContainer key={formStep.step}>
            <Step className={`${formStep.number === currentStep ? 'active' : ''}`}>{formStep.number}</Step>
            <StepSubContainer>
              <Text>{formStep.step}</Text>
              <StepContent>{formStep.content}</StepContent>
            </StepSubContainer>
          </StepContainer>
        ))}
    </StyledAside>  
  )
}

export default Sidebar