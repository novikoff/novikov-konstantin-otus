import {CHANGE_LOCATION} from "./actionTypes";


export function changeLocation(location:string){
    return {
        type: CHANGE_LOCATION,
        payload:location
    }
}
