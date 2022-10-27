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
