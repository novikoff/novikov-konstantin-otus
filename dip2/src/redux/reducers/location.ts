import {CHANGE_LOCATION} from "../actions/actionTypes";

const initialState = {
    prevLocation:'',
    location:''
}
export default function locationReducer(state=initialState,action:any){
    switch(action.type){
        case CHANGE_LOCATION:
            return {...state,prevLocation:state.location,location:action.payload};
        default:
            return state;
    }
}
