export interface IEmployee2 {
    id:Number;
    name:string;
    dob:string;
    doj:string;
    salary:Number;
    email:string;
    role:string;
    totalLeave:string;
}

export interface EmployeeResolved{
    eemployeelist: IEmployee2[];
    error?: any;
}