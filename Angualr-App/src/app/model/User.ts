export class User{
    id: number;
    firstName: string;
    secondName: string;
    email: string;
    status: WorkStatus;
    profilePhoto?: string;
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

