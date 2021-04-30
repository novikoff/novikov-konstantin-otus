import {SIDEBARCART_OPEN,SIDEBARCART_CLOSE,SIDEBAR_OPEN,SIDEBAR_CLOSE,MOBILEMENU_OPEN,MOBILEMENU_CLOSE,OVERLAYER_CLOSE} from "./actionTypes";
//import {SIGN_IN,SIGN_UP,LOG_OUT} from "./actionTypes";
import {Dispatch} from "redux";


export function sideBarCartOpen(){
    return {
        type: SIDEBARCART_OPEN
    }
}

export function sideBarCartClose(){
    return {
        type: SIDEBARCART_CLOSE
    }
}

export function sideBarOpen() {
    return {
        type: SIDEBAR_OPEN
    }
}
export function sideBarClose() {
    return {
        type: SIDEBAR_CLOSE
    }
}

export function mobileMenuOpen() {
    return {
        type: MOBILEMENU_OPEN
    }
}
export function mobileMenuClose() {
    return {
        type: MOBILEMENU_CLOSE
    }
}

export function overLayerClose() {
    return {
        type: OVERLAYER_CLOSE
    }
}
// export function addNumber(number:number){
//     return {
//         type: ADD_NUMBER,
//         payload:number
//     }
// }

