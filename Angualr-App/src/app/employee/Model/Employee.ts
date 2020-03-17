export class Employee {
    id: string;
    userId: string;
    firstName: string;
    secondName: string;
    email: string;
    image: string;

}

export enum WorkStatus{
    online = 'aktywny',
    loggedId = 'zalogowany',
    offline = 'niedostępny',
}

export interface WorkStatsIcon{
    name: string;
    icon: string;
}
