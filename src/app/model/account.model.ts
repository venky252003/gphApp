export class account {
    name:string = '';
    type:accountType;
    maintenance: boolean;
    id:string = '';
}

export enum accountType{
    WeekLy,
    Monthly,
    Quaterly,
    Yearly
}

