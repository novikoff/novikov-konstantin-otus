import {LOG_OUT, AUTH_USER, AUTH_ERROR, SIGN_OUT_USER, SET_ERROR} from "../actions/actionTypes";

const initialState = {
    currentUser:'Guest',
    authenticated:false,
    error:'',
    user: {},
}
export default function authReducer(state=initialState,action: { type:string,payload:any }){
    switch(action.type){
        case SET_ERROR:
            return {...state,error:action.payload}
        case LOG_OUT:
            return {...state};
        case AUTH_USER:
            return {
                ...state,
                currentUser:action.payload.email,
                authenticated: true,
                error: null,
                user:action.payload
            };
        case AUTH_ERROR:
            return {
                ...state,
                currentUser:"Guest",
                authenticated:false,
                error: action.payload.message
            };
        case SIGN_OUT_USER:
            return {
                ...state,
                authenticated: false,
                error: null
            };
        default:
            return state;

    }
}
