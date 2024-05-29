export type PlanName = 'Arcade' | 'Advanced' | 'Pro'

export interface Plan {
    plan: PlanName;
    frequency: string;
    icon: JSX.Element;
    price: number;
    freePeriod?: string;
}