export interface Submenu {
    name: string,
    url: string
   }

export interface Items {
     id: number,
     name: string,
     requiresLoggedInUser?: boolean,
     submenu?: Submenu[]
   }
export interface Input {
    type: string;
    value:string;
    name:string;
    label:string;
    placeholder?:string;
}
export interface Form {
    id:number;
    question:string;
    radio:boolean;
    inValue:Input[];
}
