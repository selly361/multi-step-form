export interface Plan {
    plan: string;
    frequency: string;
    icon: JSX.Element;
    price: number;
    freePeriod?: string;
}