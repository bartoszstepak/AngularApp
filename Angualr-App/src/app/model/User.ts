import { WorkStatus } from '../employee/Model/Employee';

export class User{
    id: number;
    firstName: string;
    secondName: string;
    email: string;
    status: WorkStatus;
    type: string;
}

export class UserCredentials {
    id: number;
    userId: number;
    email: string;
    password: string;
}

