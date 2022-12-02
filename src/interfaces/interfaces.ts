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
export interface Form {
    id:number;
    label:string;
    value:string;
    type:string;
}
