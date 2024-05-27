import { AddOn, PersonalInfoData, Plan } from "Types"




export interface FormData {
    personalInfo: PersonalInfoData
    selectedPlan: Plan
    addOns: AddOn[]
}