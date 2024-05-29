import React, { useEffect } from 'react'
import { useFormContext, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { StyledForm, StyledFieldset, StyledLabelContainer, StyledLabel, ErrorText, StyledInput } from './PersonalInfo.styles'
import { PersonalInfoData } from 'Types'

interface PersonalInfoProps {
    handleFormDataChange: (data: PersonalInfoData) => void
}


interface FormValues {
    personalInfo: {
        name: string;
        email: string;
        phoneNumber: string;
    }
}

function PersonalInfo({ handleFormDataChange }: PersonalInfoProps) {
    const { register, formState: { errors }, watch } = useFormContext<FormValues>()

    const formData = watch("personalInfo")

    useEffect(() => {
        handleFormDataChange(formData)
    }, [])

    return (
        <StyledForm>
            <StyledFieldset>
                <StyledLabelContainer>
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                    {errors.personalInfo?.name && <ErrorText>{errors.personalInfo.name.message}</ErrorText>}
                </StyledLabelContainer>
                <StyledInput id="name" {...register('personalInfo.name', { required: 'Name is required' })} />
            </StyledFieldset>

            <StyledFieldset>
                <StyledLabelContainer>
                    <StyledLabel htmlFor="email">Email Address</StyledLabel>
                    {errors.personalInfo?.email && <ErrorText>{errors.personalInfo.email.message}</ErrorText>}
                </StyledLabelContainer>
                <StyledInput id="email" {...register('personalInfo.email', { required: 'Email is required' })} />
            </StyledFieldset>

            <StyledFieldset>
                <StyledLabelContainer>
                    <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
                    {errors.personalInfo?.phoneNumber && <ErrorText>{errors.personalInfo.phoneNumber.message}</ErrorText>}
                </StyledLabelContainer>
                <StyledInput id="phoneNumber" {...register('personalInfo.phoneNumber', { required: 'Phone number is required' })} />
            </StyledFieldset>
        </StyledForm>
    )
}

export default PersonalInfo
