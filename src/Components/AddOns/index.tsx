import React from 'react'
import { AddOn } from 'Types'
import {
	AddOnContainer,
	AddOnItem,
	Checkbox,
	CheckboxLabel,
	AddOnDetails,
	AddOnTitle,
	AddOnDescription,
	AddOnPrice
} from './AddOns.styles'
import { useKeyboardNavigation } from 'Hooks'
import { useFormContext } from 'react-hook-form'

interface AddOnsProps {
	frequency: 'monthly' | 'yearly'
	handleFormDataChange: (data: AddOn[]) => void
}

interface FormValues {
	addOns: AddOn[]
}

const AddOns: React.FC<AddOnsProps> = ({ frequency, handleFormDataChange }) => {
	const { watch } = useFormContext<FormValues>()
	const addOns = watch('addOns')

	const handleToggle = (index: number) => {
		const updatedAddOns = [...addOns]
		updatedAddOns[index].checked = !updatedAddOns[index].checked
		handleFormDataChange(updatedAddOns)
	}

	const { elementsRef, handleKeyDown } = useKeyboardNavigation()

	return (
		<AddOnContainer>
			{addOns.map((addOn, index) => (
				<AddOnItem
					key={index}
					checked={addOn.checked}
					htmlFor={`addon-${index}`}
					onKeyDown={(e) => {
						handleKeyDown(e, index)
						if (e.key === 'Enter') handleToggle(index)
					}}
				>
					<Checkbox
						id={`addon-${index}`}
						checked={addOn.checked}
						onChange={() => handleToggle(index)}
						ref={(el) => (elementsRef.current[index] = el)}
					/>
					<CheckboxLabel />
					<AddOnDetails>
						<AddOnTitle>{addOn.title}</AddOnTitle>
						<AddOnDescription>{addOn.description}</AddOnDescription>
					</AddOnDetails>
					<AddOnPrice>
						+${addOn.price}/{frequency === 'yearly' ? 'yr' : 'mo'}
					</AddOnPrice>
				</AddOnItem>
			))}
		</AddOnContainer>
	)
}

export default AddOns
