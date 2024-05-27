import { useState, KeyboardEvent } from 'react'
import { ToggleSwitchContainer, Label, Switch, Knob, HiddenCheckbox } from './ToggleSwitch.styles'

interface IToggleSwitchProps {
	setFrequency: (frequency: 'yearly' | 'monthly') => void
	frequency: 'yearly' | 'monthly'
}


const ToggleSwitch = ({ setFrequency, frequency }: IToggleSwitchProps) => {

	const handleSetFrequency = () => setFrequency(frequency === 'yearly' ? 'monthly' : 'yearly')


	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			handleSetFrequency()
		}
	}


	const isYearly = frequency === 'yearly'

	return (
		<ToggleSwitchContainer>
			<Label htmlFor='toggle-switch' active={!isYearly}>
				Monthly
			</Label>
			<HiddenCheckbox
				id='toggle-switch'
				checked={isYearly}
				onChange={handleSetFrequency}
			/>
			<Switch
				role='switch'
				aria-checked={isYearly}
				tabIndex={0}
				onClick={handleSetFrequency}
				onKeyDown={handleKeyDown}
			>
				<Knob active={isYearly} />
			</Switch>
			<Label htmlFor='toggle-switch' active={isYearly}>
				Yearly
			</Label>
		</ToggleSwitchContainer>
	)
}

export default ToggleSwitch
