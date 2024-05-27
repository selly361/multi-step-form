import React, { useRef, useState } from 'react'
import { AddOn } from 'Types'
import { addOns } from 'Constants'
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

interface AddOnsProps {
	frequency: 'monthly' | 'yearly'
	addOns: AddOn[]
	handleFormDataChange: (data: AddOn[]) => void
}

const AddOns = ({ frequency }: AddOnsProps) => {
	const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>(addOns[frequency])

	const handleToggle = (index: number) => {
		const updatedAddOns = [...selectedAddOns]
		updatedAddOns[index].checked = !updatedAddOns[index].checked
		setSelectedAddOns(updatedAddOns)
	}

	const { elementsRef, handleKeyDown } = useKeyboardNavigation()


	return (
		<AddOnContainer>
			{selectedAddOns.map((addOn, index) => (
				<AddOnItem
					key={index}
					checked={addOn.checked}
					htmlFor={`addon-${index}`}
					onKeyDown={(e) => {
						handleKeyDown(e, index)
						if(e.key === 'Enter') handleToggle(index)
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
						+${addOn.price}/{addOn.frequency === 'yearly' ? 'yr' : 'mo'}
					</AddOnPrice>
				</AddOnItem>
			))}
		</AddOnContainer>
	)
}

export default AddOns
