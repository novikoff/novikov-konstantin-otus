import {SIDEBARCART_OPEN,SIDEBARCART_CLOSE,SIDEBAR_OPEN,SIDEBAR_CLOSE,MOBILEMENU_OPEN,MOBILEMENU_CLOSE,OVERLAYER_CLOSE} from "../actions/actionTypes";

const initialState = {
    overLayer:false,
    sideBarCart:false,
    sideBar:false,
    mobileMenu:false,
}
interface IState {
    overLayer:boolean,
    sideBarCart:boolean,
    sideBar:boolean,
    mobileMenu:boolean,
}
export default function overlayerReducer(state:IState=initialState,action:any){
    switch(action.type){
        // case CHANGE_LOCATION:
        //     return {...state,prevLocation:state.location,location:action.payload};
        case SIDEBARCART_OPEN:
            return {overLayer:true,sideBarCart:true,sideBar:false,mobileMenu:false}
        case SIDEBARCART_CLOSE:
            return {...state,overLayer:false,sideBarCart:false}
        case SIDEBAR_OPEN:
            return {overLayer:true,sideBarCart:false,sideBar:true,mobileMenu:false}
        case SIDEBAR_CLOSE:
            return {...state,overLayer:false,sideBar:false}
        case MOBILEMENU_OPEN:
            return {overLayer:true,sideBarCart:false,sideBar:false,mobileMenu:true}
        case MOBILEMENU_CLOSE:
            return {...state,overLayer:false,mobileMenu:false}
        case OVERLAYER_CLOSE:
            return {overLayer:false,sideBarCart:false,sideBar:false,mobileMenu:false}
        default:
            return state;
    }
}
