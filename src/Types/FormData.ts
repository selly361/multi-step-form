import { AddOn, PersonalInfoData, PlanName } from "Types"




export interface FormData {
    personalInfo: PersonalInfoData
    selectedPlan: PlanName
    addOns: AddOn[]
}